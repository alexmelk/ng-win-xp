import { Component, OnInit } from '@angular/core';
import Webamp, { Track } from 'webamp';

@Component({
  selector: 'app-winamp',
  templateUrl: './winamp.component.html',
  styleUrls: ['./winamp.component.less'],
})
export class WinampComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const el: HTMLElement =
      document.getElementById('app__winamp') || new HTMLElement();
    const webamp = new Webamp({
      initialTracks: [
        <Track>{
          url: '../../assets/tracks/Scorpions_-_Send_Me_An_Angel_47852025.mp3',
        },
      ],
    });
    webamp.renderWhenReady(el);
  }
}
