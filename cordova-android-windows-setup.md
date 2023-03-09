
# Windows 10 version 2004 and up or 11 - release and development

A guide on how to set up a workspace and run a Cordova app on Android 12L on Windows 10 version 2004 and up or Windows 11. All commands will be ran in a standard Windows command prompt. There will be steps to follow and examples at the end of this guide to explain how to add a ``User Variable`` or a ``PATH`` correctly for your Windows installation.
I will refer to the ``System Variable`` named ``Path`` as ``PATH`` for simplicity and clarity.

## Installing Prerequisites for Cordova

Install the latest LTS version (**18.15.0**) of NodeJS for your system from the following [link](https://nodejs.org/en/download/):
```none
https://nodejs.org/en/download/
```
During the installation, make sure to select ``Add to PATH``. 
###IMAGE

Once installed correctly, run the following command:
```cmd
npm install -g cordova
```

## Setting up a project using a demo template

Once cordova has been installed correctly using npm, move into your working directory and run the following command to create a demo project:

```cmd
cordova create hello com.example.hello HelloWorld
```
A Cordova demo project should be created. Make sure a proper directory with the name "hello" has been created with all its related files being created inside.

## Adding Android support

### Adding the Android platform
Travel inside your project's directory and run the following command to add Android 12L support to your project:
```cmd
cordova platform add android@11.0.0
```

Once done, you can verify it has been added succesfully using the following command:
```cmd
cordova platform ls
```

### Installing requirements 
Once you have added your Android platform to the Cordova project with no problems. It is time to check if you comply with all the requirements necessary to build and release an Android app. To see which requirements you are missing, run the following command:
```cmd
cordova requirements
```

If you have a clean system, you will be missing all requirements, this guide will show you how to comply with each individual prerequisite.

#### Java SDK

Install the latest LTS version (**11.0.18**) of Java 11 for your system from the following [link](https://www.oracle.com/java/technologies/downloads/#java11):
```none
https://www.oracle.com/java/technologies/downloads/#java11
```

Once it has been installed,  create a ``User Variable`` named ``JAVA_HOME`` with the path to your ``...\jdk-11`` and a ``PATH`` pointing to your ``...\javapath`` directory.


#### Android SDK

Install the latest version (**2022.1.1 Patch 2**) of Android Studio Electric Eel for your system from the following [link](https://developer.android.com/studio):
```none
https://developer.android.com/studio
```

Once Android Studio has been installed,  we need to add the necessary SDK and tools to your Android Studio installation. To do so, open ``Android Studio`` and click on ``More Actions`` to get to ``SDK Manager``.
Once everything has been checked correctly, apply your changes.
###IMAGE

Inside the  ``SDK Platforms`` tab, check ``Android 12L (Sv2)``.
###IMAGE

Inside the ``SDK Tools`` tab uncheck ``Hide Obsolete Packages`` at the bottom of the window. After that, check ``Android SDK Command-line Tools``, ``Android SDK Platform-tools``, ``Android SDK Tools (Obsolete) and under ``Android SDK Build-Tools 34-rc2`` check ``32.1.0-rc1``. Once everything has been checked correctly, apply your changes.
###IMAGE

Once you have completed the previous steps,  create a ``User Variable`` named ``ANDROID_SDK_ROOT`` with the path to your ``...\Sdk`` and point your ``PATH`` to ``...\Sdk\platform-tools``, ``\Sdk\cmdline-tools\latest\bin``.

#### Android Target
Once Android Studio has been installed,  we need create a virtual device. To do so, open ``Android Studio`` and click on ``More Actions`` to get to ``Virtual Device Manager``. Once the window is open click on ``Create device`` and follow the steps from the wizard. When asked to ``Select a system image`` make sure to select ``Sv2``.
###IMAGE

Once you have completed the previous steps,  point your ``PATH`` to ``...\Sdk\tools\emulator``.

#### Gradle

Download the latest version (**8.0.2**) of the Gradle Binaries for your system from the following [link](https://gradle.org/releases/):
```none
https://gradle.org/releases/
```

Once it has been downloaded, extract them in a directory to your liking and create a ``PATH`` pointing to your ``...\gradle-8.0\bin`` directory.


## Releasing an Android application

To build your project into an ``*.apk`` file,  run the following command inside the root of your project:
```cmd
cordova build android
```
The application will be located at ``...\platforms\android\app\build\outputs\apk\debug\app-debug.apk``

To run your project directly, you can either turn on your newly created emulated device or connect a physical android device running Android 12L or higher with ``USB Debugging`` enabled in ``developper settings``. Once you have set up your chosen device, run the following command:
```cmd
cordova run android
```

## User Variables and PATH

### Opening the Environment Variables window
```none
1.  Open the "Control Panel" from the start menu
2.  Select "System" under the "System and Security" tab
3.  Click on "Advanced system settings"
4. Click on "Environment Variables..."
```

### Creating a User Variable
For this section, we will only work under the ``user variables for [USERNAME]`` section
```none
1.  Click on "New..."
2.  Fill both fields with the desired values
3.  Press "OK"
```
Repeat the previous steps for every variable you wish to add.

### Adding to your Path varibale
For this section, we will only work under the ``system variables`` section
```none
1.  Click on "New..."
2.  Fill both fields with the desired values
3.  Press "OK"
```
Repeat the previous steps for every variable you wish to add.