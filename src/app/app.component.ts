import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicComponentService } from './shared/components/services/dynamic-component.service';
import { ExternalComponent } from './apps/external/external.component';
import { ExternalAppName } from './apps/external/enum/external-app-title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ng-win-xp';
  constructor(
    private router: Router,
    private dynamicComponent: DynamicComponentService
  ) {}
  ngOnInit(): void {
    this.router.navigate(['loader']);

    this.dynamicComponent.create(ExternalComponent, <ExternalComponent>{
      externalAppName: ExternalAppName.pinball,
    });

    this.dynamicComponent.create(ExternalComponent, <ExternalComponent>{
      externalAppName: ExternalAppName.paint,
    });

    this.dynamicComponent.create(ExternalComponent, <ExternalComponent>{
      externalAppName: ExternalAppName.minesweeper,
    });

    this.dynamicComponent.create(ExternalComponent, <ExternalComponent>{
      externalAppName: ExternalAppName.notepad,
    });
  }
}
