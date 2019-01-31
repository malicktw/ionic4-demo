# intro

Welcome to Ionic

Repo guide to learn and experiment install, create, and run an Ionic app.

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

Photo galery official tutorial
https://ionicframework.com/docs/developer-resources/guides/first-app-v4/intro/

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

### Testing in a browser
Now, you can cd into the folder that was created. Much of your app can be built right in the browser with ionic serve. We recommend starting with this workflow.

```
cd myApp 
ionic serve
```

To end ionic serve use Control + C.

## Deploy to a device using Ionic DevApp

DevApp offers a realtime view of changes as they're being made, with a rich library of pre-installed native plugins to test native features of the app.

There’s no need to install complicated Native SDKs - all it takes is one simple command, ionic serve, and apps running anywhere DevApp is installed will be immediately available to preivew, with LiveReload to refresh changes as soon as they’re made.

First, download the Ionic DevApp. It is available in the iOS App Store as well as Google Play.

https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8

https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en

With DevApp installed, sign up or login in to an Ionic Account.


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

