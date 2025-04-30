import { Component, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { NgClass, NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

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
        NgIf,
    ],
    standalone: true,
    templateUrl: './items.component.html',
    styleUrl: './items.component.scss',
})
export class ItemsComponent{
    selected = 'dinein';
    showDetails: any;
    cartCount: number = 0;
    constructor(private router: Router) {}

    setSelection(option: 'dinein' | 'takeaway') {
        this.selected = option;
    }


    addToCart() {
        this.cartCount++;
        console.log(this.cartCount);
    }

    gotoCart() {
        this.router.navigateByUrl('add/cart');
    }


    toggleDetails() {}

    increaseQuantity() {}

    decreaseQuantity() {}
}
