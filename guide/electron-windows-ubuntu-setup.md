# Ubuntu 20.04 LTS and up - release and development

A guide on how to set up a workspace and run an Electron app on Ubuntu 20.04 LTS and up. All commands will be ran in the
standard Ubuntu terminal.

## Installing Prerequisites for Electron

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