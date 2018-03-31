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
            label: "Quit",
            accelerator: "CmdOrCtrl+Q",
            click: () => {
                app.quit();
            }
        }
    ]
};