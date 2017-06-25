import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { LoggerService } from './logger.service';
import { BackendService } from './backend.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }

    constructor(
        private logger: LoggerService,
        private backend: BackendService) {}

    get heroes(): Promise<Hero[]> { 
        return this.backend.getAll(Hero)
            .then(heroes => {
                this.logger.log(JSON.stringify(heroes));
                return heroes as Hero[];
            })
            .catch(this.handleError);
    }

    get heroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => 
            setTimeout(() => resolve(this.heroes), 2000));
    }

    getHero(id: number): Promise<Hero> {
        return this.backend.get(Hero, id)
            .then(hero => {
                this.logger.log(JSON.stringify(hero));
                return hero as Hero;
            })
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        return this.backend.update(hero)
            .catch(this.handleError) as Promise<Hero>;
    }

    create(heroName: string): Promise<Hero> {
        return this.backend.create(heroName)
            .then(hero => {
                this.logger.log(`${JSON.stringify(hero)}`);
                return hero as Hero;                
            })
            .catch(this.handleError);
    }

    delete(heroId: number): Promise<Hero> {
        return this.backend.delete(heroId)
            .catch(this.handleError);
    }
}
