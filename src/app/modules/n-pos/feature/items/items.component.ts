import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { NgClass } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-items',
    imports: [
        MatCardModule,
        MatButtonToggleModule,
        FormsModule,
        MatDividerModule,
        ReactiveFormsModule,
        NgClass,
        MatIconModule,
        MatIconButton,
        MatMenuTrigger,
        MatMenu,
        MatMenuItem,
    ],
    standalone: true,
    templateUrl: './items.component.html',
    styleUrl: './items.component.scss',
})
export class ItemsComponent{
    selected = 'dinein';
    showDetails: any;
    constructor() {}

    setSelection(option: 'dinein' | 'takeaway') {
        this.selected = option;
    }

    toggleDetails() {}

    increaseQuantity() {}

    decreaseQuantity() {}
}
