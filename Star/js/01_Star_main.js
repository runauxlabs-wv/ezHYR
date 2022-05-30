// 스팟 클릭시 설명창 생성
$(function () {
    $("각 스팟 클래스명").click(function () {
        $(".left").toggleClass("on");
    });
});
//tab 스크립트
$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});


// 메뉴버튼 x자로 변환
var menu = $(".navButton");
menu.each(function (index) {
    var $this = $(this);

    $this.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active-" + (index + 1));
    })
});
// 메뉴버튼 클릭시 menu생성
$(function () {
    $(".navButton").click(function () {
        $(".menu").toggleClass("on");
    });
});