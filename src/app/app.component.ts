import { Component } from '@angular/core';

export class Hero {
  // non-shorthand
  // public id: number
  // public name: string
  constructor(public id: number, public name: string) { // shorthand
    this.id = id;
    this.name = name;
  }
}

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`, // use backticks to make multiline text
  templateUrl: 'template.html'
})
export class AppComponent  { 
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'), 
    new Hero(2, 'Bombasto'), 
    new Hero(3, 'Magneta'), 
    new Hero(4, 'Tornado')
  ];  
  hero: Hero = this.heroes[0];

  // if you need to declare a property of function type consider the syntax below
  // is_many: ()=>Boolean; 

  is_many = function(): Boolean { return this.heroes.length > 2 };
  name_change = function(event: String): void { 
    console.log("logged " + event + " at " + new Date());
    this.heroes[0].name = event; 
  };

  // alternate ctor way if you wanted to add conditional logic maybe
  // title: string;
  // hero: Hero;
  // constructor() {
  //   this.title = 'Tour of Heroes';
  //   this.hero = { id: 1, name: 'Windstorm' }
  // }
}

