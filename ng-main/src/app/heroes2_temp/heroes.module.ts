
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { HeroesComponent } from './heroes.component';

// routes
export const ROUTES: Routes = [
	{ path: '', component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
	  HeroesComponent
  ]
})
export class HeroesModule {}