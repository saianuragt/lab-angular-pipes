import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-pipes';
  date = new Date();
  number: number = 100;
  string : string = 'Angular 8.0 is a Component Based Framework'
}
