//     app 模块，它控制应用程序的事件生命周期。
// BrowserWindow 模块，它创建和管理应用程序 窗口。
const {app, BrowserWindow, ipcMain, nativeTheme} = require('electron')
const path = require('path')

function createWindow() {
    const mainwin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {

            preload: path.join(__dirname, 'preload.js')
        },
    })
    mainwin.loadFile('view/html/index.html')
}

//在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口。 您可以通过使用 app.whenReady() API来监听此事件。 在whenReady()成功后调用createWindow()。
app.whenReady().then(() => {
    //主进程接受渲染器
    ipcMain.on('set-title', handleSetTitle)
    //创建窗口
    createWindow()
})

//ipcMain 监听set-title事件并接收参数调用下方函数
function handleSetTitle(event, title) {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    //win调用原生方法setTitle改变标题
    win.setTitle(title)
}

//黑暗模式
ipcMain.handle('toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = 'light'
    } else {
        nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
})


//关闭所有窗口时退出应用 (Windows & Linux)在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。为了实现这一点，你需要监听 app 模块的 'window-all-closed' 事件。如果用户不是在 macOS(darwin) 上运行程序，则调用 app.quit()。

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})