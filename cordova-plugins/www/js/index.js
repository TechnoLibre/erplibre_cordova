/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    document.getElementById('deviceready').classList.add('ready');

    document.getElementById("button-dialog").onclick = function() {showDialog()};
    document.getElementById("button-battery").onclick = function() {showBatteryStatus()};
    //document.getElementById("button-camera").onclick = function() {useCamera()}
    document.getElementById("button-vibration").onclick = function() {useVibration()};
    document.getElementById("button-location").onclick = function() {showGeoLocation()};
    //document.getElementById("button-file").onclick = function() {openFileManager()};
}

function showDialog() {
    navigator.notification.confirm(
        '2, 1 or 0', // message
         onConfirm,            // callback to invoke with index of button pressed
        'Choose one',           // title
        ['1','2']     // buttonLabels
    );
}

function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

function showBatteryStatus() {
    window.addEventListener("batterystatus", onBatteryStatus, false);
}

function onBatteryStatus(status) {
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
    window.removeEventListener("batterystatus", onBatteryStatus, false);
}

function useVibration() {
    navigator.vibrate([500]);
}

function showGeoLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}
// function useCamera() {
//     navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
// }

var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// function openFileManager(){ 
// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

//     console.log('file system open: ' + fs.name);
//     fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

//         alert("fileEntry is file?" + fileEntry.isFile.toString());
//         // fileEntry.name == 'someFile.txt'
//         // fileEntry.fullPath == '/someFile.txt'
//         writeFile(fileEntry, null);

//     }, onErrorCreateFile);

// }, onErrorLoadFs);
// }