import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http'
import { Hero } from './hero';
import { LoggerService } from './logger.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; // must match with table name
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
        console.error(error);
        return Promise.reject(error.message || error);
    }

    constructor(
        private http: Http,
        private logger: LoggerService) {}

    get heroes(): Promise<Hero[]> { 
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(resp => {
                this.logger.log(JSON.stringify(resp.json()));
                return resp.json().data as Hero[];
            })
            .catch(this.handleError);
    }

    get heroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => 
            setTimeout(() => resolve(this.heroes), 2000));
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(heroName: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: heroName}), {headers: this.headers})
            .toPromise()
            .then(res => {
                this.logger.log(`res.json(): ${JSON.stringify(res.json())}`);
                return res.json().data as Hero;                
            })
            .catch(this.handleError);
    }

    delete(heroId: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${heroId}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}

