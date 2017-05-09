import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { UnlessDirective } from './unless.directive'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UnlessDirective, HeroDetailComponent, HeroesComponent ],
  bootstrap: [ AppComponent ],
  providers: [HeroService]
})
export class AppModule {}
