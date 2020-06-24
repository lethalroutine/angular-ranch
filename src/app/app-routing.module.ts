import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapComponent } from './map/map.component';
import {LogInComponent} from './log-in/log-in.component';


const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'info', component: LandingPageComponent},
  {path: 'map', component: MapComponent},
  {path: 'log-in', component: LogInComponent},
  // {path: 'sign-up'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
