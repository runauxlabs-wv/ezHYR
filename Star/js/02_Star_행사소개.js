//tab 스크립트
$(document).ready(function () {

    $('.night ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.night ul.tabs li').removeClass('current');
        $('.night .tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});
$(document).ready(function () {

    $('.sun ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.sun ul.tabs li').removeClass('current');
        $('.sun .tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});