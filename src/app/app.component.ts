import { Component } from '@angular/core'

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styles: ['app.styles.css']
})
export class AppComponent {
    private title: string;

    constructor() {
        this.title = 'Tour of Heroes';
    }
}
