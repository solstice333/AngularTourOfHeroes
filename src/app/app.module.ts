import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { UnlessDirective } from './unless.directive'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    UnlessDirective, 
    HeroDetailComponent, 
    HeroesComponent,
    DashboardComponent,
    CapitalizePipe
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    HeroService
  ]
})
export class AppModule {}
