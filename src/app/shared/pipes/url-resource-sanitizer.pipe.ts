import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'urlResourceSanitizer',
})
export class UrlResourceSanitizerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(
    value: string | null | undefined,
    args?: any
  ): SafeResourceUrl | null {
    if (!value) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
