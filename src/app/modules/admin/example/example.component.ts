import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'example',
    standalone: true,
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
    templateUrl: './example.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent {
    /**
     * Constructor
     */
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
