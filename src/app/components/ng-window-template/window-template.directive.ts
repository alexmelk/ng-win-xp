import { Directive } from '@angular/core';

@Directive({
  selector: '[appWindowTemplateTitle]',
})
export class WindowTemplateTitleDirective {
  constructor() {}
}

@Directive({
  selector: '[appWindowTemplateBody]',
})
export class WindowTemplateBodyDirective {
  constructor() {}
}

@Directive({
  selector: '[appWindowTemplateFooter]',
})
export class WindowTemplateFooterDirective {
  constructor() {}
}
