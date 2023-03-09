
# Windows 10 version 2004 and up or 11 - release and development

A guide on how to set up a workspace and run a Cordova app on Android 12L on Windows 10 version 2004 and up or Windows 11. All commands will be ran in a standard Windows command prompt. There will be steps to follow and examples at the end of this guide to explain how to add a ``User Variable`` or a ``PATH`` correctly for your Windows installation.

## Installing Prerequisites for Cordova

Install the latest LTS version (**18.15.0**) of NodeJS for your system from the following [link](https://nodejs.org/en/download/):
```bash
https://nodejs.org/en/download/
```
During the installation, make sure to select ``Add to PATH``. Once installed correctly, run the following command:
```bash
npm install -g cordova
```

## Setting up a project using a demo template

Once cordova has been installed correctly using npm, move into your working directory and run the following command to create a demo project:

```bash
cordova create hello com.example.hello HelloWorld
```
A Cordova demo project should be created. Make sure a proper directory with the name "hello" has been created with all its related files being created inside.

## Adding Android support

### Adding the Android platform
Travel inside your project's directory and run the following command to add Android 12L support to your project:
```bash
cordova platform add android@11.0.0
```

Once done, you can verify it has been added succesfully using the following command:
```bash
cordova platform ls
```

### Installing requirements 
Once you have added your Android platform to the Cordova project with no problems. It is time to check if you comply with all the requirements necessary to build and release an Android app. To see which requirements you are missing, run the following command:
```bash
cordova requirements
```

If you have a clean system, you will be missing all requirements, this guide will show you how to comply with each individual prerequisite.

#### Java SDK

Install the latest LTS version (**11.0.18**) of Java 11 for your system from the following [link](https://www.oracle.com/java/technologies/downloads/#java11):
```bash
https://www.oracle.com/java/technologies/downloads/#java11
```

Once it has been installed,  create a ``User Variable`` named ``JAVA_HOME`` with the path to your ``...\jdk-11`` and a ``PATH`` pointing to your ``...\javapath`` directory.


#### Android SDK - Android Target

Install the latest version (**2022.1.1 Patch 2**) of Android Studio Electric Eel for your system from the following [link](https://developer.android.com/studio):
```bash
https://developer.android.com/studio
```

Once it has been installed,  we need to add the necessary SDK and tools to your Android Studio installation. To do so, open ``Android Studio`` and click on ``More Actions`` to get to ``SDK Manager``.
Once everything has been checked correctly, apply your changes.
###IMAGE

Inside the  ``SDK Platforms`` tab, check ``Android 12L (Sv2)``.
###IMAGE

Inside the ``SDK Tools`` tab uncheck ``Hide Obsolete Packages`` at the bottom of the window. After that, check ``Android SDK Platform-tools``, ``Android SDK Tools (Obsolete) and under ``Android SDK Build-Tools 34-rc2`` check ``32.1.0-rc1``. Once everything has been checked correctly, apply your changes.
###IMAGE

#### Gradle

Download the latest version (**8.0.2**) of the Gradle Binaries for your system from the following [link](https://gradle.org/releases/):
```bash
https://gradle.org/releases/
```

Once it has been downloaded, extract them in a directory to your liking and create a ``PATH`` pointing to your ``...\gradle-8.0\bin`` directory.