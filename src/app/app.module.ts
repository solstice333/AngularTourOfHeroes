import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { UnlessDirective } from './unless.directive'
import { CapitalizePipe } from './capitalize.pipe';

import { HeroService } from './hero.service';
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
  declarations: [ // components, directives, pipes go here i.e. view directives
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
