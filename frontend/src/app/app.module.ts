import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//importing the routing module
import { AppRoutingModule } from './__routing/app-routing.module';

import {ReactiveFormsModule } from '@angular/forms';

//http module
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './__components/navbar/navbar.component';
import { HomeComponent } from './__components/home/home.component';
import { DashboardComponent } from './__components/dashboard/dashboard.component';
import { RegisterComponent } from './__components/register/register.component';

//services
import { AuthService } from './__services/auth.service';
import { LoginComponent } from './__components/login/login.component';
import { ProfileComponent } from './__components/profile/profile.component';

//flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

//AuthGuard
import { AuthGuard } from './__guards/auth.guard';
import { NotAuthGuard } from './__guards/notAuth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthService,AuthGuard,NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
