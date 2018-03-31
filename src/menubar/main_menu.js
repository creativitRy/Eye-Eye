const {BrowserWindow} = require("electron");
const {load} = require("./../preferences/prefLoader");

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
                alert("Calibrate")
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