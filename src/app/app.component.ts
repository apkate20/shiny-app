import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>This is the markup for app component</h1>',
  templateUrl: './app.component.html',
  styles: [
  `
    p {
      color : blue
    }
  `],
  styleUrls: ['./app.component.css', './app1.component.css', './style.css']
})
export class AppComponent {
  title = 'shiny-app';
}
