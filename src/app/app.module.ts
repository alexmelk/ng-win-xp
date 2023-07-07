import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { StartComponent } from './components/navbar/components/start/start.component';
import { TasksPanelComponent } from './components/navbar/components/tasks-panel/tasks-panel.component';
import { ToolbarComponent } from './components/navbar/components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WindowTemplateModule } from './components/ng-window-template/window-template.module';
import { WinampComponent } from './components/winamp/winamp.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    NavbarComponent,
    StartComponent,
    TasksPanelComponent,
    ToolbarComponent,
    WinampComponent,
  ],
  imports: [BrowserModule, WindowTemplateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
