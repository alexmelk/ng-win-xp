import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DesktopModule } from './pages/desktop/desktop.module';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './pages/loader/loader.component';
import { DesktopComponent } from './pages/desktop/desktop.component';

const routes: Routes = [
  { path: 'desktop', component: DesktopComponent },
  { path: 'loader', component: LoaderComponent },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesktopModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
