
### Bootstrap
```
ionic start appName tabs --type=angular (didn't add cordova nor pro)
cd appName
npm install @capacitor/core @capacitor/cli
npx cap init (introduced name and package)
```

### Install cordova plugin
You just use it same way you used it with Cordova

https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins

```
npm install --save @ionic-native/app-preferences@5.0.0-beta.14
npm install --save cordova-plugin-app-preferences
```

```
Added import { AppPreferences } from '@ionic-nati/ve/app-preferences/ngx';
Added import { AppPreferences } from '@ionic-native/app-preferences/ngx';
constructor(private appPreferences: AppPreferences) {
    this.appPreferences.fetch('key').then((res) => { console.log('test1 ' + res); });
    this.appPreferences.store('key', "justATest").then(res => {
      console.log(res)
      this.appPreferences.fetch('key').then((res) => { console.log('test2 ' + res); });
    })
  }
```
in home.page.ts

### Build and run on device

* run ionic build
* ran npx cap add android
* ran npx cap open android
* Wait for Android Studio to launch
* Run app from Android Studio with a device connected and check the logs.


If you npm install a Cordova/Capacitor plugin after npx cap add android then make sure you run npx cap update before running from Android Studio again.
If you make html, js, ts, css changes, run ionic build again and also run npx cap copy.
Or when in doubt, run npx cap sync as it does update+copy.

BTW, Capacitor's Storage plugin does the same as app-preferences plugin.

EDIT: If you are testing in browser, Cordova plugins don't work in Capacitor when running as PWA.
