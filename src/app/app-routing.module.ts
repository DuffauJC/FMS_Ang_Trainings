import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './components/_helpers/authGuard.components';
import { Role } from './model/role';


import { TrainingsComponent } from './components/trainings/trainings.component';
import { CaddyComponent } from './components/caddy/caddy.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './admin/homeAdmin.component';
import { AddTrainingComponent } from './admin/addTraining/addTraining.component';
import { ListTrainingComponent } from './admin/listTraining/listTraining.component';


const routes: Routes = [
  { path: 'trainings',component:TrainingsComponent  },
  {path: 'caddy', component: CaddyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    component: HomeAdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'addTraining',
    component: AddTrainingComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'listTrainings',
    component: ListTrainingComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },



  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
