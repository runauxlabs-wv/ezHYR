$(function () {
$(".header .nav>a").hover(function () {
    $('.subNav').slideDown('medium');
}, function () {
    $('.subNav').slideUp('medium');
});
});