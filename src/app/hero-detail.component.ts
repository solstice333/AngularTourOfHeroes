import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    @Output() heroNameChange = new EventEmitter();

    constructor(
        private heroService: HeroService,        
        private route: ActivatedRoute,
        private location: Location) {}

    ngOnInit(): void {
        this.route.params
            .switchMap(params => 
                this.heroService.getHero(parseInt(params['id'])))
            .subscribe(hero => this.hero = hero)
    }

    goBack(): void {
        this.location.back();
    }

    // the name of the param is still exposed to the parent
    // template as $event. See the parent component's template
    onNameChange(event: string): void {
        console.log(new Date() + 
            ": onNameChange hero-detail.component hook: " + event);
        this.hero.name = event;
        this.heroNameChange.emit(event);
    }
}