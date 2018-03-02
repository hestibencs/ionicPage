import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { Component } from '@angular/core';
// import { Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the MasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class MasterPage {

  @ViewChild(Nav) nav: Nav;

  masterPage: string = 'AboutPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterPage');
  }

  openPageMaster(page) {
    this.nav.push(page);
  }

  logout() {
    this.navCtrl.setRoot('LoginPage');
  }

}
