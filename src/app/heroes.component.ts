import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
  // backticks for multiline strings
  // template: `
  //   <h2>heroes:</h2>
  //   <ul>
  //     <li>foo</li>
  //     <li>bar</li>
  //   </ul>`,
  // styles: [`
  //   h1 {
  //     color: black
  //   }`
  // ]
})
export class HeroesComponent { 
  private static MANY: number = 5;
  private selectedHero: Hero;
  private heroes: Hero[];

  private _initHeroes(): void {
    // this.heroService.heroesSlowly
    this.heroService.heroes
    .then(heroesReceived => this.heroes = heroesReceived)
    .catch(error => console.error(error));
    
    this.heroes = [];
  }

  constructor(
    private heroService: HeroService, 
    private router: Router) {}

  ngOnInit(): void {
    this._initHeroes();
  }

  // if you need to declare a property of function type consider the syntax below
  // many: ()=>boolean;
  // for full function typing on assignment, it'd look like this
  // main: ()=>boolean = function(): boolean { return this.heroes.length > AppComponent.MANY }

  get many(): boolean { return this.heroes.length > HeroesComponent.MANY };

  get none(): boolean { return this.heroes.length === 0 };

  onNameChange(event: string): void { 
    console.log(new Date() + ": heroes.component consumed " + event);
    this.selectedHero.name = event; 
  };
  
  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (name)
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
  }
}
