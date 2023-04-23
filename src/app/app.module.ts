import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import * as Sentry from "@sentry/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MaterialModule } from './material/material.module';
import { Router } from '@angular/router';

@NgModule({
  // providers: [
    // {
      // provide: ErrorHandler,
      // useValue: Sentry.createErrorHandler({
      //   showDialog: true,
      // }),
    // },
    // {
      // provide: Sentry.TraceService,
      // deps: [Router],
    // },
    // {
      // provide: APP_INITIALIZER,
      // useFactory: () => () => undefined,
      // deps: [Sentry.TraceService],
      // multi: true,
    //},
  // ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
