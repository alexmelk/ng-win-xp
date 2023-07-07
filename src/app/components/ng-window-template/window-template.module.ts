import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowTemplateComponent } from './window-template.component';
import {
  WindowTemplateBodyDirective,
  WindowTemplateFooterDirective,
  WindowTemplateTitleDirective,
} from './window-template.directive';
import {
  DevExtremeModule,
  DxDataGridModule,
  DxPopupModule,
} from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  imports: [CommonModule, DevExtremeModule],
  declarations: [
    WindowTemplateComponent,
    WindowTemplateTitleDirective,
    WindowTemplateBodyDirective,
    WindowTemplateFooterDirective,
  ],
  providers: [WindowTemplateComponent],
  exports: [
    WindowTemplateComponent,
    WindowTemplateBodyDirective,
    WindowTemplateFooterDirective,
    WindowTemplateTitleDirective,
  ],
})
export class WindowTemplateModule {}
