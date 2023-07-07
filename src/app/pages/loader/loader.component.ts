import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
})
export class LoaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    asapScheduler.schedule(() => {
      this.router.navigate(['/desktop']);
    }, 5000);
  }
}
