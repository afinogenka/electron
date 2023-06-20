const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const fs = require("fs");
const os = "Windows";

const openWindow = () => {
    const win  = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadFile("./index.html");

    // win.webContents.openDevTools();

    // const win2 = new BrowserWindow({
    //     width: 600,
    //     height: 300,
    //     webPreferences: {
    //         nodeIntegration: true,
    //         contextIsolation: false,
    //         preload: path.join(__dirname, "preload.js"),
    //     }       

    // });

    // win2.loadURL("https://reactjs.org");

    // ipcMain.on("message", (event, data)=>{
    //     console.log(data);
    //     event.reply("reply", "Message recieved")
    // });

    ipcMain.on("html", (event, options)=>{
        fs.writeFileSync("Created with electron.txt", os, "utf-8");
        event.reply("saved");
    });


}

app.whenReady().then(openWindow);