$(document).ready(() => {
//菜单抽屉动画
    const menuOpen = function (self) {
        let menu = $(".menu");
        menu.animate({
            width: '120px'
        }, 100, function () {
            $(".menu p").show()

        });
        menu.toggleClass("menuClosed menuOpen")
    };
    const menuClose = function (self) {
        $(".menu p").hide()
        let menu = $(".menu");
        menu.animate({
            width: '50px'
        }, 100, function () {
            $("").hide()
        });

        menu.toggleClass("menuOpen menuClosed")
    };
    // $(".menu").on('mouseleave',function () {
    //     menuClose($('.btn-menu'))
    // })
    $(".btn-menu").on('click', function () {
        let self = $(this)
        if ($(".menu").hasClass("menuClosed")) {
            menuOpen(self)
        } else {
            menuClose(self)
        }
    })
});