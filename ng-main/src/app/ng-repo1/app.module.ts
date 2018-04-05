
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

export const repo1Routes : Routes = [
  { path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    RouterModule.forChild(repo1Routes)
  ],
  exports: [
  	AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
