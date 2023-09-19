const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080
    });
    
    win.loadFile('game.html');
  })