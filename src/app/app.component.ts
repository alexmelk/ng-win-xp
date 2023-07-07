import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ng-win-xp';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['loader']);
  }
}
