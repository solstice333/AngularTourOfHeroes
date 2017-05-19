import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    get heroes(): Promise<Hero[]> { 
        return Promise.resolve(HEROES);
    }

    get heroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => 
            setTimeout(() => resolve(this.heroes), 2000));
    }

    getHero(id: number): Promise<Hero> {
        return Promise.resolve(this.heroes
            .then(heroes => heroes
                .find(hero => hero.id === id)));
    }
}

