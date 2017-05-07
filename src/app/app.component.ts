import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`, // use backticks to make multiline text
  templateUrl: 'app.html',
  styleUrls: ['styles.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit  { 
  private static MANY: number = 5;
  private title: string;
  private selectedHero: Hero;
  private heroes: Hero[];

  private _initHeroes(): void {
    this.heroService.heroesSlowly
    .then(heroesReceived => this.heroes = heroesReceived)
    .catch(error => {
      console.error("Error: " + error);
    });
    
    this.heroes = [];
  }

  constructor(private heroService: HeroService) {
    this.title = 'Tour of Heroes';
  }
  
  ngOnInit(): void {
    this._initHeroes();
  }

  // if you need to declare a property of function type consider the syntax below
  // many: ()=>boolean;
  // for full function typing on assignment, it'd look like this
  // main: ()=>boolean = function(): boolean { return this.heroes.length > AppComponent.MANY }

  get many(): boolean { return this.heroes.length > AppComponent.MANY };

  get none(): boolean { return this.heroes.length === 0 };

  onNameChange(event: string): void { 
    console.log("logged " + event + " at " + new Date());
    this.selectedHero.name = event; 
  };
  
  onSelect(hero: Hero): void { this.selectedHero = hero; }
}

