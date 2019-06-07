import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // TODO delete, not needed i capacitor
    // https://blog.ionicframework.com/announcing-capacitor-1-0/ | no more deviceready
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      console.log('plateform ready');

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
