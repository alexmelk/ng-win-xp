import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ExternalAppName } from './enum/external-app-title';
import { EXTERNAL_APPS, ExternalApp } from './const/external-apps';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.less'],
})
export class ExternalComponent implements OnInit, OnDestroy {
  @Input() externalAppName: ExternalAppName | null = null;

  appLink: string = '';
  externalAppInfo: ExternalApp | null | undefined = null;

  constructor() {}

  ngOnInit(): void {
    if (this.externalAppName) {
      this.externalAppInfo = EXTERNAL_APPS.find(
        (x) => x.name === this.externalAppName
      );
      this.appLink = this.externalAppInfo?.url || '';
    }
  }

  ngOnDestroy(): void {}
}
