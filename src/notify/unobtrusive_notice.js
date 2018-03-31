const notifier = require('node-notifier');

module.exports.showNotice = function () {
    notifier.notify({
        title: 'My notification',
        message: 'Hello, there!',
        sound: true
    });
};