const settings = require('electron-settings');

/*let $;

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    $ = require("jquery")(window);
});*/

loadSettings();

function loadSettings() {
    document.getElementById("useVideo").setAttribute("value", settings.get("useVideo", false));
    document.getElementById("videoLink").setAttribute("value", settings.get("videoLink", ""));
    document.getElementById("minTime").setAttribute("value", settings.get("minTime", 45));
    document.getElementById("maxTime").setAttribute("value", settings.get("maxTime", 90));
    console.log("loaded")
}

document.getElementById("useVideo").addEventListener("input", saveSettings);
document.getElementById("videoLink").addEventListener("input", saveSettings);
document.getElementById("minTime").addEventListener("input", saveSettings);
document.getElementById("maxTime").addEventListener("input", saveSettings);

function saveSettings() {
    settings.set("useVideo", document.getElementById("useVideo").value);
    settings.set("videoLink", document.getElementById("videoLink").value);
    settings.set("minTime", document.getElementById("minTime").value);
    settings.set("maxTime", document.getElementById("maxTime").value);
    console.log("saved")
}