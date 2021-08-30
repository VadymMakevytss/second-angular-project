import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact.component';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../shared/shared.module';
import { ContactWelcomeComponent } from './contactWelcome/contact-welcome.component';



@NgModule({
  declarations: [
    ContactComponent,
    ContactWelcomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABlT4ip65y-dILulmrqwrXq2CiGTFDvoM'
    }),
  ],
  exports: [
    SharedModule
  ]
})
export class ContactsModule { }
