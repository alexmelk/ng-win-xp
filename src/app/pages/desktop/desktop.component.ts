import { Component, OnInit } from '@angular/core';
import { EXTERNAL_APPS } from 'src/app/apps/external/const/external-apps';
import { ExternalAppName } from 'src/app/apps/external/enum/external-app-title';
import { ExternalComponent } from 'src/app/apps/external/external.component';
import { WIN_AMP_INFO } from 'src/app/apps/winamp/const/info';
import { DynamicComponentService } from 'src/app/shared/components/services/dynamic-component.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.less'],
})
export class DesktopComponent implements OnInit {
  externalAppName = ExternalAppName;
  winAmpInfo = WIN_AMP_INFO;
  externalApps = EXTERNAL_APPS;
  constructor(private dynamicComponent: DynamicComponentService) {}

  ngOnInit() {}

  openExternalApp(name: ExternalAppName) {
    this.dynamicComponent.create(ExternalComponent, <ExternalComponent>{
      externalAppName: name,
    });
  }
}
