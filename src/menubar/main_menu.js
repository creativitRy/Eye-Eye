module.exports.mainMenu = {
    label: "File",
    submenu: [
        {
            label: "Exercise",
            click: () => {
                alert("Exercise")
            }
        },
        {
            label: "Calibrate",
            click: () => {
                alert("Calibrate")
            }
        },
        {
            label: "Preferences",
            click: () => {
                alert("Preferences")
            }
        },
        {
            label: "Close",
            click: () => {
                app.quit();
            }
        }
    ]
};