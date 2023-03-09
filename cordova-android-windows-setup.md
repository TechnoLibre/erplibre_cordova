
# Windows 10 version 2004 and up or 11 - release and development

A guide on how to set up a workspace and run a Cordova app on Android 12L on Windows 10 version 2004 and up or Windows 11. All commands will be ran in a standard Windows command prompt.

## Installing Prerequisites for Cordova

Install the latest LTS version (**18.15.0**) of NodeJS for your system from the following [link](https://nodejs.org/en/download/):
```bash
https://nodejs.org/en/download/
```
Once installed correctly, run the following command:
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

#### Java

Install the latest LTS version (**11.0.18**) of Java 11 for your system from the following [link](https://www.oracle.com/java/technologies/downloads/#java11):
```bash
https://www.oracle.com/java/technologies/downloads/#java11
```