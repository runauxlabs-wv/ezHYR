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
//스크롤 상하로 생겼을때 메뉴바 색상 변경
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
});