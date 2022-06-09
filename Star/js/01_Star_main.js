// 스팟 클릭시 설명창 생성
$(function () {
    $(".place1").click(function () {
        $(".left").toggleClass("on");
    });
});
// 스팟 클릭시 설명창 생성
$(function () {
    $(".left").click(function () {
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
//코스 애니메이션 실행
// $("#n2").click(function(event){
//     event.preventDefault();
//     $(".n_course1").hide("fast");
//    });
//       $("#n1").click(function(){
//     $(".n_course1").show("fast");
//    });