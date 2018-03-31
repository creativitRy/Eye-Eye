const {BrowserWindow, remote} = require('electron');
const exercise = require("./../exercise/exercise");

let noticeWindow = null;

module.exports.showNotice = function () {
    if (noticeWindow != null)
        return;

    noticeWindow = new BrowserWindow({width: 500, height: 300, frame: false});
    noticeWindow.setAlwaysOnTop(true);
    noticeWindow.on('closed', () => {
        noticeWindow = null
    });
    noticeWindow.loadURL(`file://${__dirname}/obtrusive_notice.html`);
};

function loadExercise() {
    exercise.showNotice();
    closeWindow();
}

function closeWindow() {
    remote.getCurrentWindow().close();
}