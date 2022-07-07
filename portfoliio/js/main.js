$(function(){
    var welcomeSection = $('.welcome-section'),
    enterButton = welcomeSection.find('.enter-button');

    setTimeout(function(){
      welcomeSection.removeClass('content-hidden');
    },800);
    enterButton.on('click',function(e){
      e.preventDefault();
      welcomeSection.fadeOut();
    })
  })
//tab 스크립트
$('.tabs span').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.tabs span').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
});