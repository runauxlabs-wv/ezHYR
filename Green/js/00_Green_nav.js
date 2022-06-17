$( document ).ready( function() {
$(".nav").mouseenter(function () {
    $('.subNav').addClass("on");
});
$(".subNav").mouseleave(function () {
    $('.subNav').removeClass("on");
});
});