import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlResourceSanitizerPipe } from './url-resource-sanitizer.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [UrlResourceSanitizerPipe],
  exports: [UrlResourceSanitizerPipe],
})
export class PipesModule {}
