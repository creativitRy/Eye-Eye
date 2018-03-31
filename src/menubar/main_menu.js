const {app, BrowserWindow} = require("electron");
const {loadPref} = require("./../preferences/prefLoader");
const {change} = require("./../calibrator/calibrateLoader");

let calibrate = null;
let pref = null;

module.exports.mainMenu = {
    label: "File",
    submenu: [
        {
            label: "Exercise",
            click: () => {
                alert("Exercise")
            }
        },
        {
            label: "Calibrate",
            click: () => {
                if (calibrate == null) {
                    calibrate = new BrowserWindow({width: 1000, height: 800, resizable: false});
                    calibrate.on('closed', () => {
                        calibrate = null
                    });
                    calibrate.maximize();
                    change(calibrate);
                }
            }
        },
        {
            label: "Preferences",
            click: () => {
                if (pref == null) {
                    pref = new BrowserWindow();
                    pref.on('closed', () => {
                        pref = null
                    });
                    loadPref(pref);
                }
            }
        },
        {
            label: "Close",
            click: () => {
                app.quit();
            }
        }
    ]
};
