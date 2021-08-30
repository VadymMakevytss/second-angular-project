import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { CardComponent } from './components/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
  ]
})
export class CardModule { }
