import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {CdkScrollable} from "@angular/cdk/overlay";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, NativeDateModule} from "@angular/material/core";
import {QuillModule} from "ngx-quill";
import { TranslocoModule } from '@jsverse/transloco';
import {
    SubmitConfirmationDialogComponent
} from './components/submit-confirmation-dialog/submit-confirmation-dialog.component';
import { HotkeyDirective } from './directives/hotkey.directive';
const _materialModule = [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    CdkScrollable,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NativeDateModule,
    TranslocoModule,
    QuillModule.forRoot(),
]

@NgModule({
    declarations:[ ],
    imports: [
        _materialModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        _materialModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule
{
}
