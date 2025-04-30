import { Routes } from '@angular/router';
import { ItemsComponent } from './feature/items/items.component';
import { AddToCartComponent } from './feature/add-to-cart/add-to-cart.component';
import { OrderDoneComponent } from './feature/order-done/order-done.component';

export default [
    {
        path     : '',
        component: ItemsComponent,
    },
    {
        path     : 'cart',
        component: AddToCartComponent,
    },
    {
        path     : 'done',
        component: OrderDoneComponent,
    },
] as Routes;
