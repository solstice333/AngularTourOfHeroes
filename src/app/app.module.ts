import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { UnlessDirective } from './unless.directive'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard', // if prefixed with a slash, this represents
                              // an absolute redirect as opposed to a relative
                              // redirect. An absolute redirect replaces the
                              // entire suffix of the URL, not just what 
                              // matches in 'path'
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  declarations: [ 
    AppComponent, 
    UnlessDirective, 
    HeroDetailComponent, 
    HeroesComponent,
    DashboardComponent 
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    HeroService
  ]
})
export class AppModule {}
