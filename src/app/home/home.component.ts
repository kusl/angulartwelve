import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Angular 12';

  constructor() {}

  ngOnInit(): void {
    this.sayHello();
  }

  sayHello() {
    throw new Error('Function not implemented.');
  }
}
