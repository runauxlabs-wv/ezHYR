$(document).ready(function () {
    if (window.innerWidth > 1200){
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
}else {
}
});

$("#open").click(function () {
    $(".subNav").addClass("on");
});
$("#close").click(function () {
    $(".subNav").removeClass("on");
});
$(".subNav span").click(function () {
    $("this>div").addClass("on");
});