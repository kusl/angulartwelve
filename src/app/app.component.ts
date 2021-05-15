import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as Honeybadger from '@honeybadger-io/js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular 12';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    Honeybadger.notify(`Set title to ${this.title}`);
  }
}
