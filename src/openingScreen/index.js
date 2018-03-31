// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {app, remote} = require("electron");
const {loadPref} = require("./../preferences/prefLoader");
const {change} = require("./../calibrator/calibrateLoader");
const exercise = require("./../exercise/exercise");

let calibrate = null;
let pref = null;
const BrowserWindow = remote.BrowserWindow;

function transfer1() {
  exercise.showNotice();
}
function transfer2() {
  if (calibrate == null) {
      calibrate = new BrowserWindow({width: 1000, height: 800, resizable: false});
      calibrate.on('closed', () => {
          calibrate = null
      });
      calibrate.maximize();
      change(calibrate);
  }
}
function transfer3() {
  if (pref == null) {
      pref = new BrowserWindow();
      pref.on('closed', () => {
          pref = null
      });
      loadPref(pref);
  }
}
