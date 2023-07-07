import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinampComponent } from './winamp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WinampComponent],
  exports: [WinampComponent],
})
export class WinampModule {}
