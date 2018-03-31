const {BrowserWindow} = require("electron");
const {load} = require("./../preferences/prefLoader");
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
              change(calibrate);
            }
        },
        {
            label: "Preferences",
            click: () => {
                const win = new BrowserWindow();
                load(win);
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
