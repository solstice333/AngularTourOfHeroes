import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'template.html'
})
export class AppComponent  { 
  title = 'Tour of Heroes'; 
  hero = 'Windstorm';
}
