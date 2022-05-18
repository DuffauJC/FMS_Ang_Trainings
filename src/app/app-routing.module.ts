import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { CaddyComponent } from './caddy/caddy.component';

const routes: Routes = [
  {
    path: 'trainings',
    component:TrainingsComponent
  },
  {
    path: 'caddy',
    component: CaddyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
