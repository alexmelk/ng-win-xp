import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenComponent } from './full-screen.component';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  imports: [CommonModule, DxButtonModule],
  declarations: [FullScreenComponent],
  exports: [FullScreenComponent],
})
export class FullScreenModule {}
