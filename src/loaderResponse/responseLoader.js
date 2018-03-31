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
    pathname: 'C:/Users/Matthew/Documents/CSpractice/wholesomeHacks/Eye-Eye/src/loaderResponse/loader.html',
    protocol: 'file:',
    slashes: true
  }));
}

function calculateAccuracy() {
  return Math.floor((65 + Math.random() * 20));
}

function returnToScreen() {
  window.close();
}

$(document).ready(function(){
  setTimeout(() => {
    let accuracy = calculateAccuracy();
    $('#accuracy').text(accuracy + "%");
    $('#loading').hide();
    $('#result').show();
  }, 4000);
});
