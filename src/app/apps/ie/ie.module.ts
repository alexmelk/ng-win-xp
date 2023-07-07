import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IeComponent } from './ie.component';
import { WindowTemplateModule } from 'src/app/shared/modules/ng-window-template/window-template.module';

@NgModule({
  imports: [CommonModule, WindowTemplateModule],
  declarations: [IeComponent],
  exports: [IeComponent],
})
export class IeModule {}
