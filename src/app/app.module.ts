import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsModule } from './contacts/contacts.module';
import { CardModule } from './card/card.module';
import { ProductModule } from './details/product.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContactsModule,
    CardModule,
    ProductModule,
    BrowserAnimationsModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
