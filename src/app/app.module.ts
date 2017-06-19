import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UnlessDirective } from './unless.directive'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CapitalizePipe } from './capitalize.pipe';
import { HeroSearchComponent } from './hero-search.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [ // imported into the application (not like the import
             // statement that resolves symbols)
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ // components, directives, pipes go here
    AppComponent, 
    UnlessDirective, 
    HeroDetailComponent, 
    HeroesComponent,
    DashboardComponent,
    CapitalizePipe,
    HeroSearchComponent
  ],
  bootstrap: [ // root component that ang creates and inserts 
               // into the index.html host web page
    AppComponent 
  ],
  providers: [ // provide a service here for components to use
    HeroService
  ]
})
export class AppModule {}
