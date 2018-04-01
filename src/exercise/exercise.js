const {remote} = require('electron');
const settings = require('electron-settings');

let exerciseWindow = null;

module.exports.showNotice = function () {
    const BrowserWindow = remote.BrowserWindow;

    if (exerciseWindow != null) {
        exerciseWindow.focus();
        return;
    }

    exerciseWindow = new BrowserWindow({width: 750, height: 750, resizable: false});
    exerciseWindow.on('closed', () => {
        exerciseWindow = null
    });

    let type = settings.get("useVideo", false) ? "video" : "animation";
    console.log(`file://${__dirname}/exercise_${type}.html`);
    exerciseWindow.loadURL(`file://${__dirname}/exercise_${type}.html`);
};

function updateVideo() {
    document.getElementById("ytplayer").src = "https://www.youtube.com/embed/" + youtube_parser(settings.get("videoLink", "tiUz5gwkSn0"));
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
