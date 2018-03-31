const obtrusive = require("./obtrusive_notice");
const unobtrusive = require("./unobtrusive_notice");

module.exports.showNotice = function () {
    // todo: settings
    if (true)
    {
        obtrusive.showNotice();
    }
    else
        unobtrusive.showNotice();
}