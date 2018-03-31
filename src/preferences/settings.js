/*let $;

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    $ = require("jquery")(window);
});*/

loadSettings();

function loadSettings()
{
    document.getElementById("useVideo").value = 1;
    console.log("test")
}