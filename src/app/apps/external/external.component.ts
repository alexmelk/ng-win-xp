import { Component, Input, OnInit } from '@angular/core';
import { ExternalAppName } from './enum/external-app-title';
import { EXTERNAL_APPS, ExternalApp } from './const/external-apps';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.less'],
})
export class ExternalComponent implements OnInit {
  @Input() externalAppName: ExternalAppName | null = null;

  appLink: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.externalAppName) {
      this.appLink =
        EXTERNAL_APPS.find((x) => x.name === this.externalAppName)?.url || '';
    }
  }
}
