import {Component} from '@angular/core';

import {Plugins} from '@capacitor/core';

const {SplashScreen, StatusBar} = Plugins;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor() {
        this.initializeApp();
    }

    initializeApp() {

        // Hide the splash (you should do this on app launch)
        // https://capacitor.ionicframework.com/docs/apis/splash-screen
        SplashScreen.hide().catch(error => {
            console.error(error);
        });

    }
}
