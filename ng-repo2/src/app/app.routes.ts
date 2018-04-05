import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      	from './heroes/heroes.component';
import { HeroesComponent as H2}     from './heroes2/heroes.component';


const routes: Routes = [
  { path: 'heroes21', component: HeroesComponent },
  { path: 'heroes22', component: H2 }
 ];

 @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutes {}