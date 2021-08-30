import { NgModule } from '@angular/core';
import { OrderComponent } from './components/order.component';
import { SharedModule } from '../shared/shared.module';
import { OrderingThanksComponent } from './welcome/ordering-thanks.component';
import { CreateNewComponent } from './create/create-new.component';
import { PreviewComponent } from './create/preview/preview.component';



@NgModule({
  declarations: [
    OrderComponent,
    OrderingThanksComponent,
    CreateNewComponent,
    PreviewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    OrderComponent,
    OrderingThanksComponent,
    PreviewComponent
  ]
})
export class OrderModule { }
