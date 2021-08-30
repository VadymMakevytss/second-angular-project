import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModule
  ],
  exports: [
  ]
})
export class ProductModule { }
