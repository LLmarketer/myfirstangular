import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //selects the html from the app folder
  styleUrls: ['./app.component.css'] //selects the css from the app folder
})
export class AppComponent {
  title = 'app';
  message: string = "World";
  chairs : number = 4;
}
