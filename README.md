# Reasearch and Development for Technolibre

Trying multiple different technologies and the way they interact with eachother (AngularJS, Angular, Firebase).

- Cordova
- Electron
- Capacitor
- LineageOS 19.1

# Cordova

## Description

Create an Android and iOS application from a website using Cordova. Introducing the application to Cordova's first and
third party plugins. Experimentation with Firebase, AngularJS and Angular.

## Projects

- Cordova
    - Demonstration Application

      Succesfully created a demo HelloWorld application.

- Cordova Plugins
    - cordova-plugin-battery-status

      Successfully added a button to display, inside a dialog box, the state of the battery (charging/discharging and
      amount of battery left in percentage).

    - cordova-plugin-camera

      Unsuccessfully added a button to open the camera/image picker to import a picture to the application.

    - cordova-plugin-dialogs

      Successfully added a button to display a dialog box with different outcomes depending which button is pressed or
      not (exiting by tapping outside the boundries of the dialog box).

    - cordova-plugin-file

      Unsuccessfully added a button to open a file manager to create/modify/delete a file/folder.

    - cordova-plugin-geolocation

      Successfully added a button to display, inside a dialog box, the geolocation of the device (latitude, longitude,
      altitude, speed, timestamp and more).

    - cordova-plugin-vibration

      Successfully added a button to vibrate the phone for a specific amount on time in milliseconds.

- XML/RPC
    - odoo-await

      Unsuccessfully added a button to create/modify/delete a model from an Odoo database.

- NodeJS
    - nodejs-mobile-cordova
      Unsuccessfully integrated nodeJS to the Cordova application.

- Firebase
    - cordova-plugin-firebase-messaging

      Successfully added a background service that takes a "google-services.json" file and enables the possibility to
      receive push notifications at all times.

    - cordova-plugin-firebasex

      Example project from GitHub by Dave Alden (dpa99c) showcasing the different features of "cordova-plugin-firebasex"
      using "google-services.json".

- AngularJS
    - Counter

      Implemented a button that increments a variable and outputs it in real time.

    - Checkbox

      Implemented a checkbox that enables and disables a button in real time.

    - Text input

      Implemented a text input field that outputs it's entry in real time.

- Angular

    - Unsuccessfully implemented the demo Application from Angular in Electron.

## Summary

### Cordova Plugins

| Title                         | Description                                                            | Link                                                    | Android | iOS     |
|-------------------------------|------------------------------------------------------------------------|---------------------------------------------------------|---------|---------|
| cordova-plugin-battery-status | This plugin provides information about the device's battery            | https://github.com/apache/cordova-plugin-battery-status | &#9745; | &#9745; |
| cordova-plugin-camera         | This plugin provides a way to take and select pictures from the device | https://github.com/apache/cordova-plugin-camera         | &#9744; | &#9744; |
| cordova-plugin-dialogs        | This plugin provides a way to open an dialog box on the device         | https://github.com/apache/cordova-plugin-dialogs        | &#9745; | &#9745; |
| cordova-plugin-geolocation    | This plugin provides information about the device's location           | https://github.com/apache/cordova-plugin-geolocation    | &#9745; | &#9745; |
| cordova-plugin-file           | This plugin provides a way to read/write files to the device           | https://github.com/apache/cordova-plugin-file           | &#9744; | &#9744; |
| cordova-plugin-vibration      | This plugin provides a way to vibrate the device                       | https://github.com/apache/cordova-plugin-vibration      | &#9745; | &#9745; |

### XMLRPC

| Title             | Description                                                                                                           | Link                                                   | Android | iOS     |
|-------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|---------|---------|
| async-odoo-xmlrpc | Node.js client library for odoo ERP using xmlrpc. Al most API base on External API.                                   | https://github.com/nguyenvantien2009/async-odoo-xmlrpc | &#9744; | &#9744; |
| odoo-xmlrpc       | Node.js client library for odoo ERP using xmlrpc.                                                                     | https://github.com/faisalsami/odoo-xmlrpc              | &#9744; | &#9744; |
| odoo-await        | Simple Odoo API client built with promises for async / await usage. Features CRUD, many2many field methods, and more. | https://github.com/vettloffah/odoo-await               | &#9744; | &#9744; |

### NodeJS

| Title                 | Description                                                 | Link                                                  | Android | iOS     |
|-----------------------|-------------------------------------------------------------|-------------------------------------------------------|---------|---------|
| nodejs-mobile-cordova | A toolkit for integrating Node.js into mobile applications. | https://github.com/janeasystems/nodejs-mobile-cordova | &#9744; | &#9744; |

### Firebase

| Title                             | Description                                                                                                                              | Link                                                            | Android | iOS     |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|---------|---------|
| cordova-plugin-firebase-messaging | This plugin provides a way to send push notifications from Google Firebase to your Cordova project.                                      | https://github.com/chemerisuk/cordova-plugin-firebase-messaging | &#9745; | &#9744; |
| cordova-plugin-firebasex          | this plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project. | https://github.com/dpa99c/cordova-plugin-firebasex              | &#9745; | &#9744; |

### AngularJS

| Title      | Description                                                   | Link | Android | iOS     |
|------------|---------------------------------------------------------------|------|---------|---------|
| Counter    | Button that increments a variable and outputs it in real time | N/A  | &#9745; | &#9745; |
| Checkbox   | Checkbox that enables and disables a button in real time      | N/A  | &#9744; | &#9744; |
| Text input | Text input field that outputs it's entry in real time         | N/A  | &#9745; | &#9745; |

### Other Ressources

- Cordova
    - &#9745; chrome://inspect/#devices
    - &#9745; https://cordova.apache.org/docs/en/11.x/guide/cli/
    - &#9745; https://cordova.apache.org/docs/en/11.x/guide/platforms/android/index.html#requirements-and-support
    - &#9745; https://cordova.apache.org/docs/en/11.x/guide/platforms/ios/index.html#requirements-and-support

- Cordova Plugins
    - &#9744; https://stackoverflow.com/questions/38832592/cordova-file-plugin-save-file-in-device
    - &#9744; https://www.tutorialspoint.com/cordova/cordova_file_system.htm
    - &#9744; https://www.javatpoint.com/cordova-plugin-file

- XMLRPC
    -
    &#9744; https://stackoverflow.com/questions/73661212/odoo-external-api-user-check-in-database-using-nodejs-and-xmlrpc

- NodeJS
    - &#9744; https://code.janeasystems.com/nodejs-mobile
    - &#9744; https://stackoverflow.com/questions/34659019/add-node-js-module-to-cordova-app

- Firebase
    - &#9745; https://www.youtube.com/watch?v=AD_I0Z4SRaA
    -
    &#9745; https://medium.com/@carlospcpro/how-to-add-push-notifications-to-your-cordova-app-in-ios-and-android-using-firebase-done-right-4f6c64dc50f0
    - &#9744; http://www.developerin.net/a/75-Code-Snippet/119-Push-Notification-using-Cordova-and-Firebase
    - &#9744; https://developers.connectycube.com/cordova/push-notifications

- AngularJS
    - &#9745; https://docs.angularjs.org/tutorial

- Angular
    - &#9745; https://javascript.plainenglish.io/build-a-hybrid-app-using-cordova-angular-2d63b5ed90ec

# Electron

## Description

Create a desktop application from a website using Electron. Introducing Firebase, AngularJS and Angular in the
application.

## Projects

- Demonstration Application
    - Succesfully created a demo HelloWorld application.

- Notification

    - Successfully added a button to push a notification and an output displaying a message when the notification is
      clicked by the user (event).

- Firebase

    - Unsuccessfully added a background service that will receive and display notifications.

- AngularJS

    - Unsuccessfully added a button that increments a variable and outputs it in real time.

- Angular

    - Successfully implemented the demo application from Angular in Electron.

## Summary

| Title        | Description                                                                                                                               | Link                                                          | Windows | Linux   | macOS   |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|---------|---------|---------|
| Notification | Button to push a notification and an output displaying a message                                                                          | https://www.electronjs.org/docs/latest/tutorial/notifications | &#9745; | &#9744; | &#9744; |
| Firebase     | Electron-Firebase is a quickstart framework for building cross-platform cloud-connected desktop applications using Electron and Firebase. | https://www.npmjs.com/package/electron-firebase               | &#9744; | &#9744; | &#9744; |
| AngularJS    | Button that increments a variable and outputs it in real time                                                                             | N/A                                                           | &#9744; | &#9744; | &#9744; |
| Angular      | Successfully implemented the demo Application from Angular in Electron.                                                                   | N/A                                                           | &#9745; | &#9744; | &#9744; |

### Other Ressources

- Electron
    - &#9745; https://www.electronjs.org/docs/latest/
    - &#9745; https://www.electron.build/multi-platform-build.html
    - &#9745; https://github.com/electron/electron
    - &#9745; https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app

- Firebase
    - &#9744; https://firebaseopensource.com/projects/david-asher/electron-firebase/
    - &#9744; https://www.npmjs.com/package/electron-firebase
    - &#9744; https://github.com/duytq94/reactjs-chat-demo/tree/build-electron
    - &#9744; https://www.youtube.com/watch?v=_SFYdjasYm4

- AngularJS
    - &#9744; https://github.com/KillerCodeMonkey/angularjs-electron-app
    - &#9744; https://stackoverflow.com/questions/56263092/cant-communicate-electronjs-angularjs-using-ipc
    - &#9744; https://www.youtube.com/watch?v=2GSkf_YcvdI
    - &#9744; https://github.com/mehulmpt/electron-tutorials
    - &#9744; https://www.guru99.com/ng-include-angularjs.html

- Angular
    - &#9745; https://developer.okta.com/blog/2019/03/20/build-desktop-app-with-angular-electron
    - &#9745; https://buddy.works/tutorials/building-a-desktop-app-with-electron-and-angular
    - &#9745; https://www.c-sharpcorner.com/article/getting-started-with-angular-electron-application-development/
    - &#9744; https://auth0.com/blog/create-a-desktop-app-with-angular-2-and-electron/
    - &#9744; https://angular.io/quick-start

# Capacitor

## Description

Create an Android and iOS application from a website using Capacitor. Introducing Firebase, AngularJS and Angular in the
application.

## Projects

- Demonstration Application

    - Succesfully created a demo HelloWorld application.

- Cordova Miragtion

    - Migrate a Cordova project into Capacitor.

- Firebase

    - Successfully added a background service that will receive and display notifications.

- AngularJS

    - Unsuccessfully implemented AngularJS to the demo application.

- Angular

    - Successfully implemented the demo application from Angular in Capacitor.

## Summary

| Title             | Description                                                              | Link                                                 | Android | iOS     |
|-------------------|--------------------------------------------------------------------------|------------------------------------------------------|---------|---------|
| Cordova Miragtion | Migrate a Cordova project into Capacitor                                 | https://capacitorjs.com/cordova                      | &#9745; | &#9744; |
| Firebase          | The Push Notifications API provides access to native push notifications. | https://capacitorjs.com/docs/apis/push-notifications | &#9745; | &#9744; |
| AngularJS         | Build native mobile apps with web technology and AngularJS               | N/A                                                  | &#9744; | &#9744; |
| Angular           | Build native mobile apps with web technology and Angular                 | https://capacitorjs.com/solution/angular             | &#9745; | &#9744; |

### Other Ressources

- Capacitor

    - &#9745; https://capacitorjs.com/
    - &#9745; https://github.com/ionic-team/capacitor
    - &#9745; https://capacitorjs.com/docs/getting-started
    - &#9745; https://capacitorjs.com/docs/basics/workflow#sync-your-project
    - &#9745; https://capacitorjs.com/docs/android
    - &#9745; https://github.com/ionic-team/capacitor/issues/4603

- Cordova Migration

    - &#9745; https://capacitorjs.com/docs/cordova/migrating-from-cordova-to-capacitor

- Firebase

    - &#9745; https://mabbkhawaja.medium.com/firebase-push-notifications-in-ionic-capacitor-app-android-eccea502dad3
    - &#9745; https://www.youtube.com/watch?v=YUr8pw0nO7Y
    - &#9745; https://www.youtube.com/watch?v=85t5oRimhgU

- Angular

    - &#9744; https://medium.com/keka-engineering/build-android-app-with-angular-capacitor-dda36f95213
    - &#9744; https://angular.io/quick-start

- iOS
    - &#9745; https://developer.apple.com/xcode/resources/
    - &#9745; https://www.youtube.com/watch?v=IQ2mbwENV78
    - &#9744; https://github.com/NativeScript/nativescript-cli/issues/2896
    - &#9744; https://forum.ionicframework.com/t/ionic-app-scripts-not-installed/94212
    - &#9744; https://ionicframework.com/docs/intro/cli
    - &#9744; https://stackoverflow.com/questions/51967335/npm-install-permission-denied-macos
    - &#9744; https://stackoverflow.com/questions/55558984/xcode-pods-projectname-debug-xcconfig-unable-to-open-file-wrong-directory
    - &#9744; https://www.maketecheasier.com/install-macos-virtualbox/
    - &#9744; https://www.youtube.com/watch?v=RQXwHeU0INU
    - &#9744; https://www.youtube.com/watch?v=fhnECybadUw
    - &#9744; https://www.youtube.com/watch?v=q5V6WWWRlJg
    - &#9744; https://www.youtube.com/watch?v=l645YGt7Mo4

# LineageOS 19.1

## Description

Create a build of LineageOS 19.1 using the official sources and run it in an emulator.

## Projects

- Building
    - Succesfully created built a compressed file that can be flashed on a device and emulator.

- Running

    - Successfully ran the compressed file in an emulator.

- Modifying

    - Unsuccessfully modified the sources to have a custom flavor of LineageOS.

## Summary

| Title     | Description                                             | Link                                                       | Windows | Linux   | macOS   |
|-----------|---------------------------------------------------------|------------------------------------------------------------|---------|---------|---------|
| Building  | Building a ROM from the official LineageOS 19.1 sources | https://wiki.lineageos.org/emulator                        | &#9744; | &#9745; | &#9744; |
| Running   | Running the newly built ROM in an emulator              | https://wiki.lineageos.org/emulator                        | &#9744; | &#9745; | &#9744; |
| Modifying | Setting up a work environment and modifying the code    | https://wiki.lineageos.org/how-to/import-to-android-studio | &#9744; | &#9744; | &#9744; |

### Other Ressources

- Building
    - &#9745; https://wiki.lineageos.org/emulator
    - &#9745; https://en.wikibooks.org/wiki/Advanced_phone_customization/Building_your_own_ROM
    - &#9745; https://askubuntu.com/questions/470545/how-do-i-set-up-ccache
    - &#9745; https://stackoverflow.com/questions/41986507/unable-to-set-default-python-version-to-python3-in-ubuntu
    - &#9744; https://blog.51cto.com/u_847102/5269133
    - &#9744; https://www.youtube.com/watch?v=6iggj1S0JpM
    - &#9744; https://forum.xda-developers.com/t/guide-how-to-building-lineageos-for-an-unsupported-device.4419263/


- Running
    - &#9745; https://wiki.lineageos.org/emulator

- Modifying
    - &#9744; https://wiki.lineageos.org/how-to/import-to-android-studio
    - &#9744; https://forum.xda-developers.com/t/mod-settings-in-lineage-os-and-android-nougat.3781613/
    - &#9744; https://www.reddit.com/r/LineageOS/comments/jz5z6c/configuring_default_lineage_settings_in_the_build/
    - &#9744; https://github.com/LineageOS/android_lineage-sdk/blob/lineage-17.1/sdk/src/java/lineageos/providers/LineageSettings.java#L2129
    - &#9744; https://ibotpeaches.github.io/Apktool/install/
    - &#9744; https://forum.xda-developers.com/t/guides-all-guides-at-one-place.2073370/
    - &#9744; https://forum.xda-developers.com/t/guide-complete-android-rom-development-from-source-to-end.2814763/
    - &#9744; https://developers.google.com/code-search
    - &#9744; https://cs.android.com/
    - &#9744; https://source.android.com/docs
    - &#9744; https://github.com/dsixda/Android-Kitchen

- Other
    - &#9744; https://kiwiirc.com/nextclient/irc.libera.chat#lineageos-dev
    - &#9744; https://github.com/topics/poco-x3-pro
    - &#9744; https://github.com/topics/pocox3pro
    - &#9744; https://xiaomiwiki.github.io/
    - &#9744; https://www.edureka.co/community/85643/usr-bin-env-python-no-such-file-or-directory
    - &#9744; https://github.com/Evolution-X/packages_apps_Settings/tree/tiramisu/src/com/android/settings

