import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { StartComponent } from './components/start/start.component';
import { TasksPanelComponent } from './components/tasks-panel/tasks-panel.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    StartComponent,
    TasksPanelComponent,
    ToolbarComponent,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
