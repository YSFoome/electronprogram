// 切换主题
document.getElementById("darkmode").addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})
//通知


const NOTE_TITLE = 'hello'
const NOTE_BODY = '你好欢迎来到新闻推送中心'
const CLICK_NOTE = '点击了信息'
new Notification(NOTE_TITLE, {
    body: NOTE_BODY
}).onclick(function () {
    document.getElementById('output').innerText = CLICK_NOTE
})