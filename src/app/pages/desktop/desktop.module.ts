import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { WindowTemplateModule } from 'src/app/shared/modules/ng-window-template/window-template.module';
import { WinampModule } from 'src/app/apps/winamp/winamp.module';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  imports: [CommonModule, WindowTemplateModule, NavbarModule, WinampModule],
  exports: [NavbarModule, DesktopComponent],
  declarations: [DesktopComponent],
})
export class DesktopModule {}
