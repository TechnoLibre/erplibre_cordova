# Ubuntu 20.04 LTS and up - release and development

A guide on how to set up a workspace and run a Capacitor app on Ubuntu 20.04 LTS and up. All commands will be ran in the standard Ubuntu terminal.

## Installing Prerequisites for Capacitor

Install the latest version of Node.JS for your system with the following command:
```bash
sudo apt install nodejs

```

Install the latest version of npm for your system with the following command:
```bash
sudo apt install npm
```

Make sure that both prerequisites are installed correctly by running the following commands:
```bash
node -v
npm -v
```

## Setting up a project using a demo template

Create a new Capacitor app with the following command:
```cmd
npm init @capacitor/app
```

Inside the root of the new Capacitor app project folder, run the following commands:
```cmd
npm i @capacitor/core
npm i -D @capacitor/cli
npx cap init
```

## Adding Android support

## Installing requirements for Android

TODO

### Java SDK

Install the latest version  of Java 11 for Ubuntu from the following commands:
```bash
sudo apt-get install openjdk-11-jdk
```

### Android SDK

Download the latest version of Android Studio Electric Eel for Ubuntu with the following [link](https://developer.android.com/studio):
```none
https://developer.android.com/studio
```

Once downloaded, extract the compressed file, navigate to ``android-studio/bin/`` and run the ``studio.sh`` script. If you want to add a shortcut to Android Studio on your system. Open an empty project, and on the toolbar, follow theses steps.
```none
1. Tools
2. Create Desktop Entry
```

Once Android Studio has been installed,  we need to add the necessary SDK and tools to your Android Studio installation. 
```none
1. Open Android Studio
2. Click on "More Actions"
3. Click on "SDK Manager"
```

![Android Studio - SDK Manager](image/capacitor-android-ubuntu-setup/more-sdk.png)

Inside the  ``SDK Platforms`` tab, check ``Android 12L (Sv2)``.

![Android Studio - Android 12L SDK](image/capacitor-android-ubuntu-setup/sdk-12L.png)

Once everything has been checked correctly, apply your changes.

### Android Target

Once Android Studio has been installed,  we need create a virtual device.
```none
1. Open Android Studio
2. Click on "More Actions"
3. Click on "Virtual Device Manager"
```

![Android Studio - Virtual Device Manager](image/capacitor-android-ubuntu-setup/more-avd.png)

Once the window is open click on ``Create device`` and follow the steps from the wizard. When asked to ``Select a system image`` make sure to select ``Sv2``.

![Android Studio - System Image](image/capacitor-android-ubuntu-setup/system-image.png)

### Adding the Android platform

Inside the root of the project, run the following commands:
```cmd
npm install @capacitor/android
npx cap add android
```

## Opening an Android application in Android Studio

Inside the root of the project, run the following command:
```cmd
npx cap open android
```

## Running the Android application

Inside the root of the project, run the following command:
```cmd
npx cap run android
```

Choose a device within the list to push the application to. If a physical device with "USB Debugging" turned on is connected to the computer, it will also appear in the same list.

# Converting a Cordova Application to Capacitor

## Adding Capacitor
Run the following command in the root of your Cordova project to add Capacitor to it:
```cmd
npx cap init
```

## Build your Web App
Run the following command in the root of your Capacitor project to build your web project to ensure that all the folders and files are configured:
```cmd
npm run build
```
## Adding the Android platform
Inside the root of the project, run the following commands:
```cmd
npm install @capacitor/android
npx cap add android
```

## Syncing the project
Run the following command in the root of your Capacitor project to sync your plugins from the project with the native code for Android:
```cmd
npx cap sync
```

## Running the Android application

Inside the root of the project, run the following command:
```cmd
npx cap run android
```

Choose a device within the list to push the application to. If a physical device with "USB Debugging" turned on is connected to the computer, it will also appear in the same list.
