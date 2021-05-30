import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Angular 12';
  now = new Date();

  ngOnInit(): void {
    this.now = new Date();
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
