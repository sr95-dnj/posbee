import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { IOption } from '../../model/option';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../../shared.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mat-select-search',
    templateUrl: './mat-select-search.component.html',
    imports: [ReactiveFormsModule, CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, NgxMatSelectSearchModule ]
})

export class MatSelectSearchComponent implements OnInit, OnChanges {

    @Input() formGroup: FormGroup;
    @Input() data: IOption[];
    @Input() isReadonly: boolean;
    @Input() isDisabled: boolean;
    @Input() isMultiple: boolean;
    @Input() required: boolean;
    @Input() controlName: string;
    @Input() isApiSearch: boolean;
    @Input() tableName: string;
    @Input() columnName: string[];
    @Input() placeholder: string;
    @Output() selectionChange = new EventEmitter<any>();
    @Output() customKeyDown = new EventEmitter<any>();


    public matSelectSearch: FormControl = new FormControl();
    protected _onDestroy = new Subject<void>();
    filteredData: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    ngOnInit(): void {
        if(this.placeholder == undefined) {
            this.placeholder = 'Select'
        }
        // this.data.forEach(d => {
        //     if (d.nameBn) d.name = d.nameBn;
        // })
        this.filteredData.next(this.data.slice());
        this.matSelectSearch.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
            this.filterData();
        });
    }

    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    private filterData(): void {
        if (!this.data) { return; }
        let search = this.matSelectSearch.value;
        if (!search) {
            this.filteredData.next(this.data.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter
        this.filteredData.next(
            this.data.filter(d => d.name.toString().toLowerCase().includes(search))
        );
    }

    onSelectionChange(value: any): void {
        this.selectionChange.emit(value);
    }

    getValueForSelectionControl(): string | null {
        if (!this.isReadonly) {
            return null;
        }
        const selectedOption = this.data.find(option => option.value === this.formGroup.controls[this.controlName]);
        return selectedOption && selectedOption.name;
    }

    ngOnChanges(): void {
        this.changeDetectorRef.detectChanges();
        this.filteredData.next(this.data.slice());
        this.matSelectSearch.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
            this.filterData();
        });
    }

    onKeyDown(value: Event): any {
        this.customKeyDown.emit(value);
    }


}
