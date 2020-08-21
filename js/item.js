$(document).ready(function() {
    var clickedTab = $(".tabs > .active");
    var tabWrapper = $(".tab__content");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();
    activeTab.show();
    tabWrapper.height(activeTabHeight);
    $(".tabs > li").on("click", function() {
        $(".tabs > li").removeClass("active");
        $(this).addClass("active");
        clickedTab = $(".tabs .active");
        activeTab.fadeOut(250, function() {
            $(".tab__content > li").removeClass("active");
            var clickedTabIndex = clickedTab.index();
            $(".tab__content > li").eq(clickedTabIndex).addClass("active");
            activeTab = $(".tab__content > .active");
            activeTabHeight = activeTab.outerHeight();
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function() {
                activeTab.delay(50).fadeIn(250);

            });
        });
    });
    var colorButton = $(".colors li");
    colorButton.on("click", function() {
        $(".colors > li").removeClass("active-color");
        $(this).addClass("active-color");
        var newColor = $(this).attr("data-color");
        $(".bg-color").css("background-color", newColor);
        $(".text-color").css("color", newColor);
    });
});
window.onload = function() {
    window.requestAnimationFrame(getDate)
}

function getDate() {
    window.setTimeout(function() {
        window.requestAnimationFrame(getDate)
    }, 1000 / 2)
    var d = new Date();
    var year = d.getFullYear() //获取年
    var month = d.getMonth() + 1; //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
    var day = d.getDay() //获取日
    var days = d.getDate() //获取日期
    var hour = d.getHours() //获取小时
    var minute = d.getMinutes() //获取分钟
    var second = d.getSeconds() //获取秒

    if (month < 10) month = "0" + month
    if (days < 10) days = "0" + days
    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute
    if (second < 10) second = "0" + second

    var week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
    var Tools = document.getElementById("time")
    var da = year + " 年 " + month + " 月 " + days + " 日 " + week[day] + " " + hour + " : " + minute + " :" + second
    Tools.innerHTML = da
}
var height = $(window).height();
$(".arrow ").click(function() {
    var h = $(window).scrollTop();
    $("html,body ").animate({
        scrollTop: h + height
    }, height);
});