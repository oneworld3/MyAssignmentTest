import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//importing the routing module
import { AppRoutingModule } from './__routing/app-routing.module';


import {ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { NavbarComponent } from './__components/navbar/navbar.component';
import { HomeComponent } from './__components/home/home.component';
import { DashboardComponent } from './__components/dashboard/dashboard.component';
import { RegisterComponent } from './__components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
