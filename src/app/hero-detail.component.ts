import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
    @Output() heroNameChange = new EventEmitter();

    // the name of the param is still exposed to the parent
    // template as $event. See the parent component's template
    onNameChange(event: String): void {
        this.heroNameChange.emit(event);
    }
}