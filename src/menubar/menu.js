const {Menu} = require("electron");
const {devMenu} = require("./dev_menu");
const {mainMenu} = require("./main_menu");

module.exports.initMenu = function (){
    const menus = [mainMenu];
    if (process.platform === 'darwin') {
        menus.unshift({});
    }
    // todo: development build
    if (true) {
        menus.push(devMenu);
    }

    Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
}