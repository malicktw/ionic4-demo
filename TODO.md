TODO

# Migration fro mcordova 
 
- [x]  remove known-incompatible-plugins

https://capacitor.ionicframework.com/docs/cordova/known-incompatible-plugins

npm rm @ionic-native/splash-screen @ionic-native/status-bar cordova-plugin-splashscreen cordova-plugin-statusbar

npm rm cordova-plugin-ionic-webview cordova-plugin-ionic-keyboard

- capacitor sample api
    - [x] fileSystem sample
    - [x] fileSystem exta : recursive delete
    - [x] fileSystem sample : move file
    - [ ] cordova file plugin
    - [ ] migrate Splash Screen
    - [ ] status bar | https://github.com/ionic-team/capacitor/blob/master/example/src/pages/status-bar/status-bar.html

- capacitor

- [ ] remove the installed Ionic Native plugins and migrate all cordova plugin to capacitor one
    
npm rm @ionic-native/core

    - [ ] camera

- [ ] Upgrade to latest ionic version
```
TypeError: Object(...) is not a function
    at Camera.push../node_modules/@ionic-native/camera/ngx/index.js.Camera.getPicture
```

```
npm install @ionic-native/camera@4.20.0 
```
https://stackoverflow.com/questions/54381062/camera-getpicture-is-not-a-function-in-ionic-3

- [ ] Move to capacitor 
    - [ ] https://capacitor.ionicframework.com/docs/guides/push-notifications-firebase
    - [ ] cordova and capacitor cohabitation | add camera version of capacitor | https://capacitor.ionicframework.com/docs/guides/ionic-framework-app/

- [ ] rename 'page' file to angular components naming (https://angular.io/guide/styleguide)
- [ ] build destop app with electron
- [ ] add app version and app name from @ionic-native/app-version
- [ ] add ToastController https://ionicframework.com/docs/api/toast

## tuto TODO

- [ ] https://github.com/abritopach/angular-ionic-master-detail
- [ ] https://github.com/jcesarmobile/ionic-angular-capacitor-push-example
- [x] https://javascripttuts.com/ionic-capacitor-in-one-go/
- [ ] let’s replace the @ionic-native integration for the Status bar and the Splash Screen. https://javebratt.com/capacitor/
- [ ] 
