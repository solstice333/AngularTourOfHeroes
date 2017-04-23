import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { UnlessDirective } from './unless.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UnlessDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
