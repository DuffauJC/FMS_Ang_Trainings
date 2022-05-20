import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { CaddyComponent } from './caddy/caddy.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'trainings',component:TrainingsComponent  },
  {path: 'caddy', component: CaddyComponent },
  { path: '', redirectTo: 'trainings', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
