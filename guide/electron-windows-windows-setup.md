# Windows 10 version 2004 and up or 11 - release and development

A guide on how to set up a workspace and run an Electron app on Windows 10 version 2004 and up or Windows 11. All
commands will be ran in a standard Windows command prompt.

## Installing Prerequisites for Electron

Install the latest LTS version (**18.15.0**) of Node.JS for your system from the
following [link](https://nodejs.org/en/download/):

```none
https://nodejs.org/en/download/
```

During the installation, make sure to select ``Add to PATH``.

![Node.js Setup - Add to PATH](image/cordova-android-windows-setup/node-path.png)

## Setting up a project using a demo template

To create a demo project you must create a new folder, travel inside it and initialize it with the following commands:

```cmd
mkdir my-electron-app && cd my-electron-app
npm init
```

Once the folder has been initialized, run the following command:

```cmd
npm install --save-dev electron
```

## Running a Windows application

To start the Electron App once the project has been created and configured for electron, run the following command:

```
npm start
```