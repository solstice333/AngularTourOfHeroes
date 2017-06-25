import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'

import { HeroSearchService } from './hero-search.service'
import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of'; // emits values specified as args

// Observable operators
import 'rxjs/add/operator/catch'; // catch errors on observable to be handled by returning new observable or throw error
import 'rxjs/add/operator/debounceTime'; // emits value from src observable only after particular time span has passed without another src emission
import 'rxjs/add/operator/distinctUntilChanged'; // return observable that emits items emitted by src observable that are distinct by comparison from previous item
import 'rxjs/add/operator/switchMap'; // request-cancel-new-request i.e. emit value only from most recently projected observable which will drop any earlier emissions still processing

@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router,
        private logger: LoggerService) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(term => { // switch to most recent search term
                return term ? 
                    this.heroSearchService.search(term) :
                    Observable.of([] as Hero[])
                })
            .catch(error => {
                this.logger.error(error);
                return Observable.of([] as Hero[]);
            });
    }

    goToDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
