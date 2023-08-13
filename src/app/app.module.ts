import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DesktopModule } from './pages/desktop/desktop.module';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './pages/loader/loader.component';
import { DesktopComponent } from './pages/desktop/desktop.component';
import { DynamicHostModule } from './shared/components/dynamic-host/dynamic-host.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'desktop', component: DesktopComponent },
  { path: 'loader', component: LoaderComponent },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DesktopModule,
    DynamicHostModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
