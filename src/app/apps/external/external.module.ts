import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external.component';
import { WindowTemplateModule } from 'src/app/shared/modules/ng-window-template/window-template.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [CommonModule, WindowTemplateModule, PipesModule],
  declarations: [ExternalComponent],
  exports: [ExternalComponent],
})
export class ExternalModule {}
