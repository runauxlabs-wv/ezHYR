var swiper = new Swiper(".webSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mobileSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $(document).ready(function(){
    let d_width = 0; // 브라우저 가로
    let d_height = 0; // 문서 전체의 높이

    function tmp() {
        // container의 가로사이즈(화면가로 * box 개수)
        let con_width = $(window).outerWidth() * $('.wrapper section').length; 

        $('.wrapper').css({
          width: con_width
      });

      $('.wrapper section').css({
          width: con_width / $('.wrapper section').length
      });

        let w_width = $(window).width(); // 화면의 가로값
        let w_height = $(window).height() // 화면의 세로값

        // 스크롤 될때의 리미트
        d_width = con_width - w_width; // 전체 가로값 - 현재 화면의 가로값
        d_height = $('body').height() - w_height // 전체 세로값 - 현재 화면의 세로값
    }

    tmp();

    let array = [];
    for(let i=0; i<$('.wrapper section').length; i++) {
        array[i] = $('.wrapper section').eq(i).offset().left
    }

    let chk = true;
    $('.wrapper section').on('mousewheel DOMMouseScroll', function(){

        if(chk) {
            // 휠 일정시간동안 막기
            chk = false;
            setTimeout(function(){
                chk = true;
            }, 500)

            // 휠 방향 감지(아래: -120, 위: 120)
            let w_delta = event.wheelDelta / 120;
            
            // 휠 아래로
            if(w_delta < 0 && $(this).next().length > 0) {
                $('.wrapper').animate({
                    left: -array[$(this).index()+1]
                }, 500)
            }
            // 휠 위로
            else if(w_delta > 0 && $(this).prev().length > 0) {
                $('.wrapper').animate({
                    left: -array[$(this).index()-1]
                }, 500)
            }
        }
    });

//브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
    $(window).resize(function(){
        for(let i=0; i<$('.wrapper section').length; i++) {
            array[i] = $('.wrapper section').eq(i).offset().left
        }

        tmp();
    })

});