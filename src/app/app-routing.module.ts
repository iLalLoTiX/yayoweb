import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ServicesComponent } from './componentes/servicios/services.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { PreciosComponent } from './componentes/precios/precios.component';
import { PoliticasComponent } from './componentes/politicas/politicas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: ServicesComponent},
  {path: 'politicasdeprivacidad', component: PoliticasComponent},
  {path: 'SoftwareSolutions', component: PreciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
