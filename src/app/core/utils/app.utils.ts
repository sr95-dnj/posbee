import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubmitConfirmationDialogComponent } from '../../shared/components/submit-confirmation-dialog/submit-confirmation-dialog.component';
import { ConfirmDialogConstant } from '../constants/confirm.dialog.constant';
import { OK } from '../constants/message';
import { SnackbarHelper } from '../helper/snackbar.helper';

@Injectable({
    providedIn: 'root',
})
export class AppUtils {
    /* common button property*/
    SUBMIT_BUTTON = 'heroicons_outline:arrow-circle-right';

    /*lang property*/
    langEn: string = 'en';

    constructor(
        private snackbarHelper: SnackbarHelper,
        private matDialog: MatDialog,
        private router: Router,
        private httpClient: HttpClient
    ) {}

    onServerSuccessResponse(res, reloadPage?, message?): void {
        // const message = this.isLocalActive() ? message : res.message;
        if (res.status) {
            this.snackbarHelper.openSuccessSnackBarWithMessage(message, OK);
            if (reloadPage) {
                reloadPage();
            }
        } else {
            reloadPage();
            this.snackbarHelper.openErrorSnackBarWithMessage(message, OK);
        }
    }

    onServerErrorResponse(error): void {
        this.snackbarHelper.openServerErrorSnackBar(error);
    }

    onServerErrorResponseWithMessage(message: string, error): void {
        this.snackbarHelper.openErrorSnackBarWithMessage(message, error);
    }

    onFailYourPermision(type): void {
        if (type === 1) {
            this.snackbarHelper.openErrorSnackBarWithMessage(
                'do not have insert permission',
                'ok'
            );
        } else if (type === 2) {
            this.snackbarHelper.openErrorSnackBarWithMessage(
                'do not have update permission',
                'ok'
            );
        } else if (type === 3) {
            this.snackbarHelper.openErrorSnackBarWithMessage(
                'do not have delete permission',
                'ok'
            );
        }
    }

    getCurrentYear(): number {
        return new Date().getFullYear();
    }

    formatSetupFormName(inputName: string): string {
        return inputName.toUpperCase();
    }

    openConfirmDialog(viewModel, callBackDelete, customMessage?): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.width = ConfirmDialogConstant.WIDTH;
        dialogConfig.height = ConfirmDialogConstant.HEIGHT;
        dialogConfig.panelClass = ConfirmDialogConstant.PANEL_CLASS;
        dialogConfig.data = {
            message: customMessage
                ? customMessage
                : ConfirmDialogConstant.MESSAGE,
        };
        const dialogRef = this.matDialog.open(
            SubmitConfirmationDialogComponent,
            dialogConfig
        );
        dialogRef.componentInstance.closeEventEmitter.subscribe((res) => {
            if (res) {
                callBackDelete(viewModel);
            }
            dialogRef.close(true);
        });
    }

    commonConfirmDialog(viewModel, callBackMethod, msgEn, msgBn): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.width = ConfirmDialogConstant.WIDTH;
        dialogConfig.height = ConfirmDialogConstant.HEIGHT;
        dialogConfig.panelClass = ConfirmDialogConstant.PANEL_CLASS;
        dialogConfig.data = { message: msgEn };
        const dialogRef = this.matDialog.open(
            SubmitConfirmationDialogComponent,
            dialogConfig
        );
        dialogRef.componentInstance.closeEventEmitter.subscribe((res) => {
            if (res && callBackMethod) {
                viewModel ? callBackMethod(viewModel) : callBackMethod();
            }
            dialogRef.close(true);
        });
    }

    openReloadDialog(viewModel, callBackMethod): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.width = ConfirmDialogConstant.WIDTH;
        dialogConfig.height = ConfirmDialogConstant.HEIGHT;
        dialogConfig.panelClass = ConfirmDialogConstant.PANEL_CLASS;
        dialogConfig.data = {
            message: ConfirmDialogConstant.RE_PROCESS_MESSAGE,
        };
        const dialogRef = this.matDialog.open(
            SubmitConfirmationDialogComponent,
            dialogConfig
        );
        dialogRef.componentInstance.closeEventEmitter.subscribe((res) => {
            if (res) {
                callBackMethod(viewModel);
            }
            dialogRef.close(true);
        });
    }

    getPrefixUrl(): string {
        const routerUrl = this.router.url;
        const urlArray = routerUrl.split('/');
        return '/' + urlArray[1] + '/';
    }

    // YYYYMMDD
    getDateOnlyAsStringFormateYYYYMMDD(dateReq: Date): string {
        const date = new Date(dateReq);
        const year = date.getFullYear().toString();
        let mounth = (date.getMonth() + 1).toString();
        if (mounth.length === 1) {
            mounth = '0' + mounth;
        }
        let day = date.getDate().toString();
        if (day.length === 1) {
            day = '0' + day;
        }

        const formatedDate = year + mounth + day;
        return formatedDate;
    }

    public calculateAge(dob: Date): string {
        if (dob) {
            const timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
            let seconds = Math.floor(timeDiff / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            let months = Math.floor(days / 30);
            const years = Math.floor(days / 365);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;
            days %= 30;
            months %= 12;

            const yearValue = years > 1 ? 'Years' : 'Year';
            const monthValue = years > 1 ? 'Months' : 'Months';
            const dayValue = years > 1 ? 'Days' : 'Days';

            return (
                years +
                ' ' +
                yearValue +
                ' ' +
                months +
                ' ' +
                monthValue +
                ' ' +
                days +
                dayValue
            );
        }
        return '';
    }

    public getTotalHourBetweenTime(fromTime, toTime): string {
        let totalHourValue = '';
        if (fromTime && toTime) {
            fromTime = this.toTime(fromTime);
            toTime = this.toTime(toTime);

            let milSecDiff = toTime - fromTime;

            if (milSecDiff < 0) {
                milSecDiff = 24 * 60 * 60 * 1000 + milSecDiff;
            }

            const totalMinutes = milSecDiff / 60 / 1000;
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;

            totalHourValue = hours + ':' + minutes;
        }
        return totalHourValue;
    }

    toTime(timeString): Date {
        const timeTokens = timeString.split(':');
        return new Date(1970, 0, 1, timeTokens[0], timeTokens[1], 0);
    }

    /*=============== for time format ===================*/

    getCurrentDate(): Date {
        const currentDate: Date = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return currentDate;
    }

    getCleanDate(formValue): any {
        if (formValue) {
            const selectDate: Date = new Date(formValue);
            selectDate.setHours(0, 0, 0, 0);
            return selectDate;
        }
        return formValue;
    }

    getTomorrowDate(): Date {
        const currentDate: Date = this.getCurrentDate();
        currentDate.setDate(currentDate.getDate() + 1);
        return currentDate;
    }

    getCurrentTime(): string {
        const currentDate: Date = new Date();
        const hourValue =
            currentDate.getHours().toString().length === 1
                ? '0' + currentDate.getHours().toString()
                : currentDate.getHours().toString();
        const minValue =
            currentDate.getMinutes().toString().length === 1
                ? '0' + currentDate.getMinutes().toString()
                : currentDate.getMinutes().toString();
        return hourValue + ':' + minValue;
    }

    getFirstDayOfCurrentMonth(): Date {
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth();
        return new Date(y, m, 1);
    }

    formatTime(fromGroup, control: string, formValue): void {
        const formTimeFormValue = formValue.value;
        // console.log(formTimeFormValue);
        const formTime =
            formTimeFormValue.length === 3
                ? '0' + formTimeFormValue
                : formTimeFormValue;
        // const formTime = formTimeFormValue.length === 2 ?  formTimeFormValue + '00' : formTimeFormValue;

        if (formTime.length === 4) {
            // console.log(formTime.substring(0, 2));
            let minute = formTime.substring(2, 4);
            if (Number(minute) > 60) {
                minute = 59;
            } else {
                minute = formTime.substring(2, 4);
            }
            // console.log(minute);
            const formatTime = formTime.substring(0, 2) + ':' + minute;
            fromGroup.patchValue({
                [control]: formatTime,
            });
        }
    }

    formatDate(fromGroup, control: string, formObj, callBackMethod?): void {
        const formVal = formObj.value;
        // console.log(formVal);
        const formDate: any = new Date(formVal);
        // console.log(formDate);
        if (isNaN(formDate)) {
            // console.log('length' + formVal.length);
            if (formVal.length === 10) {
                const dateArray = formVal.split('/');
                // console.log(dateArray);
                if (dateArray.length === 3) {
                    const customDate = new Date();
                    customDate.setDate(Number(dateArray[0]));
                    customDate.setMonth(Number(dateArray[1]) - 1);
                    customDate.setFullYear(Number(dateArray[2]));
                    // console.log(customDate);
                    fromGroup.patchValue({
                        [control]: customDate,
                    });
                }
            }
        } else {
            fromGroup.patchValue({
                [control]: formDate,
            });
        }
        if (callBackMethod) {
            callBackMethod();
        }
    }

    resetThisField(frmGroup, formControlName): void {
        const field = frmGroup.get(formControlName);
        field.patchValue('');
    }

    fieldReset(fromGroup: FormGroup, control, index?, isDetails?): any {
        fromGroup.patchValue({
            [control]: '',
        });
    }

    addYear(date: Date, increment: number): Date {
        date.setFullYear(date.getFullYear() + increment);
        return date;
    }

    decreaseYear(date: Date, decrement: number): Date {
        date.setFullYear(date.getFullYear() - decrement);
        return date;
    }

    fileUploadWithEntity(
        SERVER_URL: string,
        formData: FormData,
        requestType: string,
        reloadPage?
    ): any {
        if (requestType === 'save') {
            this.httpClient.post<any>(SERVER_URL, formData).subscribe(
                (res) => {
                    this.onServerSuccessResponse(res, reloadPage);
                },
                (err) => {
                    this.onServerErrorResponse(err);
                }
            );
        } else {
            this.httpClient.put<any>(SERVER_URL, formData).subscribe(
                (res) => {
                    this.onServerSuccessResponse(res, reloadPage);
                },
                (err) => {
                    this.onServerErrorResponse(err);
                }
            );
        }
    }

    generateNumber(prefix: string): string {
        let d = new Date();
        let dayDigit = d.getDate().toString().padStart(2, '0');
        let monthDigit = (d.getMonth() + 1).toString().padStart(2, '0');
        let yearDigit = d.getFullYear().toString().substring(2);
        let timeDigit = d.getTime().toString().substring(6);
        return prefix + '_' + dayDigit + monthDigit + yearDigit + timeDigit;
    }
}
