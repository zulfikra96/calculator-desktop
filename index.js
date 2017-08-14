const electron  = require('electron')
const {app,BrowserWindow}       = electron



app.on('ready', function(){
    const win = new BrowserWindow({
        width:320,
        height:450
    })
    win.loadURL(`file://${__dirname}/index.html`)
}) 