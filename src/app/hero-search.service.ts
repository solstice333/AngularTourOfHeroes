import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';

import { BackendService } from './backend.service';

@Injectable()
export class HeroSearchService {
    constructor(
        private http: Http,
        private backend: BackendService) {}

    search(term: string): Observable<Hero[]> {
        return this.backend.search(term) as Observable<Hero[]>;
    }
}
