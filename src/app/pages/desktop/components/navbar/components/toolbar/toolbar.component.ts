import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  date = Date.now();
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.date = Date.now();
    }, 1000);
  }
}
