import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    templateUrl: 'my-app.html'
})
export class AppComponent {
    private title: string;

    constructor() {
        this.title = 'Tour of Heroes';
    }
}
