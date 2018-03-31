const settings = require('electron-settings');
const notice = require('./../notify/notice');

let pointer = null;
let x = 0;
let xSq = 0;
let std = 0;
let numValues = 0;
let numEyeChanges = 0;

let canShowNotice = false;

const startTimer = function () {
    pointer = setTimeout(onTimeEnded, settings.get("minTime", 45) * 60000 + 250);
};

module.exports.begin = function () {
    setInterval(updateStd, 250);
    startTimer();
};

module.exports.startTimer = startTimer;

module.exports.resetTimeout = function () {
    resetVals();
    startTimer();
};

function updateStd() {
    // todo: get from webcam
    let newX = Math.random() * 10;
    if (numValues === 0) {
        x = newX;
        xSq = newX * newX;
    }
    else {
        x = (x * numValues + newX) / (numValues + 1);
        xSq = (xSq * numValues + newX * newX) / (numValues + 1);
    }

    numValues++;

    let variance = xSq - x * x;
    let stdNew = Math.sqrt(variance);

    console.log(stdNew);

    if (stdNew > std + (100 / numValues)) {
        x = 0;
        xSq = 0;
        numValues = 0;
        std = 0;
        numEyeChanges++;
    }
    else
    {
        if (canShowNotice)
        {
            clearTimeout(pointer);
            restart();
        }
    }
}

function onTimeEnded() {
    pointer = setTimeout(restart, Math.abs(settings.get("maxTime", 90) - settings.get("minTime", 45)) * 60000 + 250);
    canShowNotice = true;
}

function restart() {
    notice.showNotice();
    resetVals();
}

function resetVals()
{
    x = 0;
    xSq = 0;
    numValues = 0;
    std = 0;
    numEyeChanges = 0;
    canShowNotice = false;
}