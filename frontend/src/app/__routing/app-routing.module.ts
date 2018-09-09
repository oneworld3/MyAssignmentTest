import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../__components/home/home.component';
import { DashboardComponent } from '../__components/dashboard/dashboard.component';
import { RegisterComponent } from '../__components/register/register.component';

const appRoutes : Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'register', component: RegisterComponent},
    
    { path: '*', component: HomeComponent}
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