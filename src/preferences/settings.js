const settings = require('electron-settings');

loadSettings();

function loadSettings() {
    if (settings.get("useVideo", false))
        document.getElementById("useVideo").checked = true;
    document.getElementById("videoLink").setAttribute("value", settings.get("videoLink", ""));
    document.getElementById("minTime").setAttribute("value", settings.get("minTime", 45));
    document.getElementById("maxTime").setAttribute("value", settings.get("maxTime", 90));
    console.log("loaded")
}

document.getElementById("useVideo").addEventListener("change", saveSettings);
document.getElementById("videoLink").addEventListener("input", saveSettings);
document.getElementById("minTime").addEventListener("input", saveSettings);
document.getElementById("maxTime").addEventListener("input", saveSettings);

function saveSettings() {
    settings.set("useVideo", document.getElementById("useVideo").checked);
    settings.set("videoLink", document.getElementById("videoLink").value);
    settings.set("minTime", document.getElementById("minTime").value);
    settings.set("maxTime", document.getElementById("maxTime").value);
    console.log("saved")
}

document.getElementById("useVideo").addEventListener("change", checkUseVideo);
checkUseVideo();
function checkUseVideo() {

    let checkBox = document.getElementById("useVideo");
    let youtubeLinks = document.getElementById("youtubeLinks");

    if(checkBox.checked) {
        youtubeLinks.style.display = "block";
    }
    else {
        youtubeLinks.style.display = "none";
    }
}
