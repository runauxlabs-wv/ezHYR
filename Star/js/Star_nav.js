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