import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { WinampModule } from 'src/app/apps/winamp/winamp.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { IeModule } from 'src/app/apps/ie/ie.module';
import { ExternalModule } from 'src/app/apps/external/external.module';
import { FullScreenModule } from './components/full-screen/full-screen.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    WinampModule,
    IeModule,
    ExternalModule,
    FullScreenModule,
  ],
  exports: [NavbarModule, DesktopComponent],
  declarations: [DesktopComponent],
})
export class DesktopModule {}
