$(document).ready(
    function () {
        $(".right_inputtingButton").click(function () {
            const id = $("#userid").val();
            const pas = $("#pas").val();
            $.ajax({
                url: "/webdemo/hello",
                encoding: "UTF-8",
                type: "POST",
                data: {
                    "id": id,
                    "pas": pas
                },
                dataType: "text",
                success: function (data) {
                    alert(data);
                },
                error: function (errorMsg) {
                    alert("失败" + errorMsg.val());
                }
            })

        })
    }
)
