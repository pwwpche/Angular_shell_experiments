
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }        from './app.component';

const routes: Routes = [
  { path: 'heroes1', loadChildren: './heroes/heroes.module#HeroesModule' },
 ];

 @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutes {}