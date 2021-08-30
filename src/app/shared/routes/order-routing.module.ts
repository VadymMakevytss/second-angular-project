import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../../order/components/order.component';
import { OrderingThanksComponent } from '../../order/welcome/ordering-thanks.component';
import { CreateNewComponent } from './../../order/create/create-new.component';

const appRoutes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'welcome', component: OrderingThanksComponent },
  { path: 'create', component: CreateNewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class OrderRoutingModule { }
