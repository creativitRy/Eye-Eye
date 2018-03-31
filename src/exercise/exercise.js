const {BrowserWindow} = require('electron');
const settings = require('electron-settings');

let exerciseWindow = null;

module.exports.showNotice = function () {
    if (exerciseWindow != null) {
        exerciseWindow.focus();
        return;
    }

    exerciseWindow = new BrowserWindow();
    exerciseWindow.on('closed', () => {
        exerciseWindow = null
    });

    let type = settings.get("useVideo", false) ? "video" : "animation";
    console.log(`file://${__dirname}/exercise_${type}.html`);
    exerciseWindow.loadURL(`file://${__dirname}/exercise_${type}.html`);
};