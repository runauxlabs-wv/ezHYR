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
//모달창 x버튼 누르거나 모달창 외 클릭시 사라지게하기
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
});
modal.addEventListener("click", e => {
    const evTarget = e.target
    if (evTarget.classList.contains("modal-overlay")) {
        modal.style.display = "none"
    }
});