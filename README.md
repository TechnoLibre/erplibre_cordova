# Reasearch and Development for Technolibre
Trying multiple different technologies and the way they interact with eachother.

- Cordova (AngularJS, Angular, Firebase)
- Electron (AngularJS, Angular)
- Capacitor (Angular)

# Cordova

## Description

Create an Android and iOS application from a website using Cordova. Introducing the application to Cordova's first and third party plugins. Experimentation with Firebase, AngularJS and Angular.

## Projects

- Cordova Plugins
    - cordova-plugin-battery-status

        Successfully added a button to display, inside a dialog box, the state of the battery (charging/discharging and amount of battery left in percentage).

    - cordova-plugin-camera

        Unsuccessfully added a button to open the camera/image picker to import a picture to the application.

    - cordova-plugin-dialogs

        Successfully added a button to display a dialog box with different outcomes depending which button is pressed or not (exiting by tapping outside the boundries of the dialog box).

    - cordova-plugin-file

        Unsuccessfully added a button to open a file manager to create/modify/delete a file/folder.

    - cordova-plugin-geolocation

        Successfully added a button to display, inside a dialog box, the geolocation of the device (latitude, longitude, altitude, speed, timestamp and more).

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

        Successfully added a background service that takes a "google-services.json" file and enables the possibility to receive push notifications at all times.

    - cordova-plugin-firebasex

        Example project from GitHub by Dave Alden (dpa99c) showcasing the different features of "cordova-plugin-firebasex" using "google-services.json".

- AngularJS
    - Counter

        Implemented a button that increments a variable and outputs it in real time.

    - Checkbox

        Implemented a checkbox that enables and disables a button in real time.

    - Text input

        Implemented a text input field that outputs it's entry in real time.

- Angular
    - Nothing

        To be worked on in the future.


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
    - chrome://inspect/#devices
    - https://cordova.apache.org/docs/en/11.x/guide/cli/
    - https://cordova.apache.org/docs/en/11.x/guide/platforms/android/index.html#requirements-and-support
    - https://cordova.apache.org/docs/en/11.x/guide/platforms/ios/index.html#requirements-and-support

- Cordova Plugins
    - https://stackoverflow.com/questions/38832592/cordova-file-plugin-save-file-in-device
    - https://www.tutorialspoint.com/cordova/cordova_file_system.htm
    - https://www.javatpoint.com/cordova-plugin-file

- XMLRPC
    - https://stackoverflow.com/questions/73661212/odoo-external-api-user-check-in-database-using-nodejs-and-xmlrpc

- NodeJS
    - https://code.janeasystems.com/nodejs-mobile
    - https://stackoverflow.com/questions/34659019/add-node-js-module-to-cordova-app

- Firebase
    - http://www.developerin.net/a/75-Code-Snippet/119-Push-Notification-using-Cordova-and-Firebase
    - https://www.youtube.com/watch?v=AD_I0Z4SRaA
    - https://developers.connectycube.com/cordova/push-notifications
    - https://medium.com/@carlospcpro/how-to-add-push-notifications-to-your-cordova-app-in-ios-and-android-using-firebase-done-right-4f6c64dc50f0
    
- AngularJS
    - https://docs.angularjs.org/tutorial

- Angular
    - https://javascript.plainenglish.io/build-a-hybrid-app-using-cordova-angular-2d63b5ed90ec

# Electron

## Description

Create a desktop application from a website using Electron. Introducing AngularJS and Angular in the application.

## Projects

- Electron Desktop Application
    - Notification

        Successfully added a button to push a notification and an output displaying a message when the notification is clicked by the user (event).

    - AngularJS

        Unsuccessfully added a button that increments a variable and outputs it in real time.

    - Angular

        Unsuccessfully added a button that increments a variable and outputs it in real time.

## Summary

| Title        | Description                                                      | Link | Windows | Linux   | macOS   |
|--------------|------------------------------------------------------------------|------|---------|---------|---------|
| Notification | Button to push a notification and an output displaying a message | N/A  | &#9745; | &#9744; | &#9744; |
| AngularJS    | Button that increments a variable and outputs it in real time    | N/A  | &#9744; | &#9744; | &#9744; |
| Angular      | Button that increments a variable and outputs it in real time    | N/A  | &#9744; | &#9744; | &#9744; |

### Other Ressources

- Electron
    - https://www.electronjs.org/docs/latest/
    - https://www.electronjs.org/
    - https://www.electron.build/multi-platform-build.html
    - https://github.com/electron/electron
    - https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app

- Notification
    - https://www.electronjs.org/docs/latest/tutorial/notifications

- AngularJS
    - https://github.com/KillerCodeMonkey/angularjs-electron-app
    - https://stackoverflow.com/questions/56263092/cant-communicate-electronjs-angularjs-using-ipc
    - https://www.youtube.com/watch?v=2GSkf_YcvdI
    - https://github.com/mehulmpt/electron-tutorials
    - https://www.guru99.com/ng-include-angularjs.html

- Angular
    - https://developer.okta.com/blog/2019/03/20/build-desktop-app-with-angular-electron
    - https://auth0.com/blog/create-a-desktop-app-with-angular-2-and-electron/