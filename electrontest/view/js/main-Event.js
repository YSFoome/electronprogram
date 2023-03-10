$(document).ready(() => {
    //菜单鼠标移动事件
    let btn = $(".btn-item")
    btn.on('click', function () {
        btn.removeClass('active')
        $(this).addClass('active')
    })
    //切换页面
    //上侧
    $(".menu-btn-top>.btn-item").on('click', function () {
        const index = $(this).index();
        $('.main-content').removeClass("active")
        $(".main-content-top>.main-content").eq(index - 1).addClass("active")


    })
    //下侧
    $(".menu-btn-bottom >.btn-item").on('click', function () {
        const index = $(this).index();
        $('.main-content').removeClass("active")
        $(".main-content-bottom>.main-content").eq(index - 1).addClass("active")

    })


    $("#openSetting").load("Setting.html")
    $("#openHighSetting").load("HighSetting.html")

});