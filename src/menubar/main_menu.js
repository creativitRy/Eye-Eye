const {app, BrowserWindow} = require("electron");
const {loadPref} = require("./../preferences/prefLoader");
const {change} = require("./../calibrator/calibrateLoader");

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
              const calibrate = new BrowserWindow({width: 1000, height: 800, resizable: false});
              calibrate.maximize();
              change(calibrate);
            }
        },
        {
            label: "Preferences",
            click: () => {
                const win = new BrowserWindow();
                loadPref(win);
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
