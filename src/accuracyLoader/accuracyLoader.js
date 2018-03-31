const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.remote.BrowserWindow

const path = require('path')
const url = require('url')

function loadAccuracy() {
  let newWindow = new BrowserWindow({width: 450, height: 700, resizable: false});

  // and load the index.html of the app.
  newWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/accuracyLoader/accuracy.html'),
    protocol: 'file:',
    slashes: true
  }));
}
