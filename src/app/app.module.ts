import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CaddyComponent } from './components/caddy/caddy.component';
import {CustomerComponent} from './components/customer/customer.component'
import { NotFoundComponent } from './components/notFound/notFound.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CaddyComponent,
    CustomerComponent,
    NotFoundComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
