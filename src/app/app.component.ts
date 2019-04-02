import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Todo List App';
  constructor() {
    console.log(123);
    this.title = 'Title Changed'
    this.changeName('new Title')
  }
  changeName(name:string):void {
    this.title = name
  }
}
