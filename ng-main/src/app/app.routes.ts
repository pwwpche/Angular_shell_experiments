import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      	from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes21', component: HeroesComponent },
  { path: 'heroes22', loadChildren: './heroes2/heroes.module#HeroesModule' },
 ];

 @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutes {}