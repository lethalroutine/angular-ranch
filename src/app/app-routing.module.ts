import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'info', component: LandingPageComponent},
  // {path: 'map'},
  // {path: 'log-in'},
  // {path: 'sign-up'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
