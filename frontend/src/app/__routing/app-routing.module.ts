import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../__components/home/home.component';
import { DashboardComponent } from '../__components/dashboard/dashboard.component';
import { RegisterComponent } from '../__components/register/register.component';
import { LoginComponent } from '../__components/login/login.component';
import { ProfileComponent } from '../__components/profile/profile.component';
import { AuthGuard } from '../__guards/auth.guard';
import { NotAuthGuard } from '../__guards/notAuth.guard';


const appRoutes : Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent,
    canActivate: [NotAuthGuard]},
    { path: 'login', component: LoginComponent,
    canActivate: [NotAuthGuard]},
    { path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard]},

    { path: '**', component: HomeComponent }, // The "Catch-All" Route
];

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
})

export class AppRoutingModule {

}