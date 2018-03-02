import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MasterPage } from './master';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MasterPage,
  ],
  imports: [
    // BrowserModule,
    IonicPageModule.forChild(MasterPage),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MasterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class MasterPageModule {}
