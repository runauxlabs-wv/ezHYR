$(document).ready(function () {
    $(".nav").mouseenter(function () {
        $('.subNav').addClass("on");
    });
    $(".subNav").mouseleave(function () {
        $('.subNav').removeClass("on");
    });
    $(".nav").mouseenter(function () {
        $('.subNav').addClass("on");
    });
    $(".subNav").mouseleave(function () {
        $('.subNav').removeClass("on");
    });
});

$("#open").click(function () {
    $(".nav").addClass("on");
});
$("#close").click(function () {
    $(".nav").removeClass("on");
});