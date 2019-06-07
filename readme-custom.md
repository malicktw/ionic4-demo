# intro

Welcome to Ionic

Repo guide to learn and experiment install, create, and run an Ionic app.

Photo galery official tutorial
https://ionicframework.com/docs/developer-resources/guides/first-app-v4/intro/

# doc 

Framework documentation
Documentation home for the Ionic Framework.
 https://ionicframework.com/docs

 Appflow documentation
https://ionicframework.com/docs/appflow/
Documentation for Ionic Appflow platform services.

Get Ionic DevApp for easy device testing
https://ionicframework.com/docs/appflow/devapp
Speed up development with the Ionic DevApp, our fast, on-device testing mobile app.

# Setup & install

### Node & npm

To build Ionic Framework apps, the only requirement is a Node & npm environment. Go to Node’s download page to select and download the LTS version to ensure best compatibility.

Node is bundled with npm, the package manager for JavaScript. To verify the installation, open a new terminal window and run:

```
node --version 
npm --version
```

### Install Git

The version control system Git is highly recommended. First, install the command-line utility from the download page. For a GUI client, we recommend Github Desktop.

To verify the installation, open a new terminal window and run:

```
git --version
```

### Install Ionic CLI

Now that Node.js and npm are installed, install the Ionic CLI globally with npm:


```
npm install -g ionic

```

### Login to your Ionic Account from the CLI

In order to take advantage of the additional services provided by Ionic Appflow you’ll want to login.

```
ionic login
```

 - Go to your newly created project: cd .\myIonicApp
       - Run ionic serve within the app directory to see your app
       - Build features and components: https://ion.link/scaffolding-docs
       - Get Ionic DevApp for easy device testing: https://ion.link/devapp
       - Push your code to Ionic Appflow to perform real-time updates, and more: git push ionic master


## Starting an App

https://ionicframework.com/docs/building/starting

```
$ ionic start myApp tabs --type=angular
```

## Running your app

### Configure project

1) you have to clone the project first.
    
    
2) Once cloned, configure the rest of the project using following commands:

```
npm install
ionic cordova platform add android
```
    
### Testing in a browser
Now, you can cd into the folder that was created. Much of your app can be built right in the browser with ionic serve. We recommend starting with this workflow.

```
cd myApp 
ionic serve
```

To end ionic serve use Control + C.

### Run on device with cordova

NB : 
* Ensure that Developer mode is enabled on your Android device and USB Debugging is activated.
* Connect your Android phone via USB to your computer and run. 
* Ensure your Dev workstation and your device is connected to same network

To check list of connected device, run adb from your adapted sdk path :
```
cd C:\Users\diop-\AppData\Local\Android\Sdk\platform-tools && adb devices
```

Then Run the following command
```
ionic cordova run android --device --livereload
```

if issue happened : 
```
ionic cordova platform rm android
ionic cordova platform add android
```

To Inspect your app in chrome, go to the following url and select your connected devices
https://ionicframework.com/docs/building/android#using-chrome-devtools

    chrome://inspect/#devices
    

### Deploy to a device using Ionic DevApp

`ionic serve -c`

DevApp offers a realtime view of changes as they're being made, with a rich library of pre-installed native plugins to test native features of the app.

There’s no need to install complicated Native SDKs - all it takes is one simple command, ionic serve, and apps running anywhere DevApp is installed will be immediately available to preivew, with LiveReload to refresh changes as soon as they’re made.

First, download the Ionic DevApp. It is available in the iOS App Store as well as Google Play.

https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8

https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en

With DevApp installed, sign up or login in to an Ionic Account.

## info

ionic info output


## Push builds

Push your code to Ionic Appflow to perform real-time updates, and more. Navigate to the root of your app’s source code and

If you’ve chosen to use Ionic Appflow as a git host run:

```
git push ionic master
```

Or if you’ve chosen to use a third party git host such as GitHub run:

```
git push origin master
```
## Package - Build Your Android Debug APK

https://ionicframework.com/docs/cli/commands/cordova-build/

ionic build --platform=android

```
ionic cordova platform add android
ionic cordova build android --debug
```

emulate

`ionic cordova emulate android`

## Capacitor
existing app 

install capacitor package to-an-existing app

```
cd ionic4-demo
npm install --save @capacitor/core @capacitor/cli
ionic integrations enable capacitor
npx cap init ionicdemo io.citizendiop.demo
ionic build
npx cap add android
npx cap sync
```

### Run on device with capacitor
https://ionicframework.com/docs/building/android#running-with-capacitor

```
ionic build
npx cap copy android
npx cap open android
```

In Android Studio, click the Run button and then select the target simulator or device.

# install plugin
https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins

npm i cordova-plugin-timer
npx cap sync

# plugin 

* Camera | https://ionicframework.com/docs/native/camera/
  
* Image picker | https://ionicframework.com/docs/native/image-picker/

# TODO

* https://www.c-sharpcorner.com/article/how-to-load-multiple-images-using-native-image-picker-in-ionic-3/

# NOTES

* Cordova plugins are not available when running the app in the browser with ionic serve. In order to be able to use the Cordova plugins, you’d need to run the app on a simulator / real device.

## Docs

* Migration strategy
https://capacitor.ionicframework.com/docs/cordova/migration-strategy/

* existing-ionic-project
https://capacitor.ionicframework.com/docs/getting-started/with-ionic/#existing-ionic-project

https://blog.ionicframework.com/announcing-capacitor-1-0/

## Resource

https://github.com/ionic-team/capacitor/issues/767#issuecomment-415481452

