import { Component } from '@angular/core';
import Webamp, { Track } from 'webamp';

@Component({
  selector: 'app-winamp',
  templateUrl: './winamp.component.html',
  styleUrls: ['./winamp.component.less'],
})
export class WinampComponent {
  constructor() {}

  async start() {
    const el: HTMLElement =
      document.getElementById('app__winamp') || new HTMLElement();
    const webamp = new Webamp({
      initialTracks: [
        <Track>{
          blob: await fetch(
            '../../assets/tracks/Scorpions_-_Send_Me_An_Angel_47852025.mp3'
          ).then((r) => r.blob()),
        },
      ],
    });
    await webamp.renderWhenReady(el);
  }
}
