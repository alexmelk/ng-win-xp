import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicHostComponent } from './dynamic-host.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicHostComponent],
  exports: [DynamicHostComponent],
})
export class DynamicHostModule {}
