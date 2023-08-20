import { Component } from '@angular/core';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.less'],
})
export class FullScreenComponent {
  fullScreenEnabled = false;

  constructor() {}

  toggleFS() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.fullScreenEnabled = true;
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      this.fullScreenEnabled = false;
    }
  }
}
