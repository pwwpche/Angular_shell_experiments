import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  exports: [
  	AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
