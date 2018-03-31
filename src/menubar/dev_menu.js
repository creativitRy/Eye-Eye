const {app, BrowserWindow} = require("electron");

module.exports.devMenu = {
    label: "Development",
    submenu: [
        {
            label: "Reload",
            accelerator: "CmdOrCtrl+R",
            click: () => {
                BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
            }
        },
        {
            label: "Toggle DevTools",
            accelerator: "Shift+CmdOrCtrl+I",
            click: () => {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        },
        {
            label: "Show obtrusive notice",
            click: () => {
                require("./../notify/obtrusive_notice").showNotice();
            }
        },
        {
            label: "Show unobtrusive notice",
            click: () => {
                require("./../notify/unobtrusive_notice").showNotice();
            }
        },
        {
            label: "Quit",
            accelerator: "CmdOrCtrl+Q",
            click: () => {
                app.quit();
            }
        }
    ]
};