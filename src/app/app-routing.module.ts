import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

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
    imports: [RouterModule.forRoot(routes)], // import directives/pipes to make
                                             // available to component
                                             // templates in this module
    exports: [RouterModule] // exporting to parent module to make 
                            // directives/pipes available (like routerLink) 
                            // to the component templates of that parent module
})
export class AppRoutingModule {}