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

const HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'Rubberman'),
  new Hero(17, 'Dynama'),
  new Hero(18, 'Dr IQ'),
  new Hero(19, 'Magma'),
  new Hero(20, 'Tornado')
];

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`, // use backticks to make multiline text
  templateUrl: 'template.html',
  styleUrls: ['styles.css']
})
export class AppComponent  { 
  title = 'Tour of Heroes';
  heroes = HEROES;
  hero = this.heroes[0];
  many = 5;

  // if you need to declare a property of function type consider the syntax below
  // is_many: ()=>Boolean; 

  is_many = function(): Boolean { return this.heroes.length > this.many };
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

