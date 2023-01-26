const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    minHeight: 757,
    minWidth: 300,
    icon: "icon.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  
  mainWindow.loadFile('window.html')
  mainWindow.menuBarVisible = false;
}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})