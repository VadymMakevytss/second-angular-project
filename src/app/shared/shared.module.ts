import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduceTextPipe } from './pipes/reduce.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './routes/order-routing.module';

@NgModule({
  declarations: [ReduceTextPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ReduceTextPipe,
    FontAwesomeModule,
    FormsModule,
    OrderRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
