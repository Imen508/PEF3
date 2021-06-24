import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';   
import { LocationsComponent } from './locations/locations.component';
import { ProductsComponent } from './products/products.component';
import { PricingComponent } from './pricing/pricing.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';

import  {  NgxMapboxGLModule  }  from  'ngx-mapbox-gl' ; 








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,  
    LocationsComponent,
    ProductsComponent,
    PricingComponent,
   
    ProductDetailComponent,
        NavbarComponent,
        SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    NgxMapboxGLModule . withConfig ( { 
      accessToken : 'pk.eyJ1IjoiaW1lbjEyNDU0IiwiYSI6ImNrcHpkcnlmNDBqeTUyeG51ODIzdHh3c3IifQ.-yeb25jTLh5YPOQLgCd-sg' , 
      geocoderAccessToken : 'pk.eyJ1IjoiaW1lbjEyNDU0IiwiYSI6ImNrcHpkcnlmNDBqeTUyeG51ODIzdHh3c3IifQ.-yeb25jTLh5YPOQLgCd-sg'   } ) 
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
