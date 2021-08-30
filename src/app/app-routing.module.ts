import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contacts/components/contact.component';
import { CardComponent } from './card/components/card.component';
import { ProductComponent } from './details/components/product.component';
import { PageNotFoundComponent } from './pageNotFound/components/page-not-found.component';
import { ContactWelcomeComponent } from './contacts/contactWelcome/contact-welcome.component';
import { OrderModule } from './order/order.module';




const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'card', component: CardComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'thankfull', component: ContactWelcomeComponent },
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'orders', loadChildren: './order/order.module#OrderModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
