import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent }                    from './heroes/heroes.component';
import { HeroesComponent as HeroesComponent2} from './heroes2/heroes.component';
import { AppRoutes }                          from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
