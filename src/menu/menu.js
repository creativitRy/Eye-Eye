import {Menu} from "electron";
import {devMenu} from "./dev_menu";
import {mainMenu} from "./main_menu";

export const initMenu = () => {
    const menus = [mainMenu];
    if (process.platform === 'darwin') {
        menus.unshift({});
    }
    // todo: development build
    if (true) {
        menus.push(devMenu);
    }
    Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};