// 预加载脚本
const {contextBridge, ipcRenderer} = require('electron')
//ipcRenderer.send将render.js中的消息传递给主进程main.js中的ipcMain.on来接受       
contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
    //可以写各种function

})

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('toggle')
    // system: () => ipcRenderer.invoke('system')
})