import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PmsStoreModule } from '@pms-store';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation: 'enabledBlocking' }
    ),
    PmsStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
