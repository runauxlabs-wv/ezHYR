//Initialize Swiper
var swiper = new Swiper(".slide", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    // 슬라이드 가장 마지막에서 스크롤 활성화
    on: {
        reachEnd: function () {
            swiper.mousewheel.disable();
        }
    }
});
window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {}
});
// //버튼 클릭시 스크롤 이동
$(document).ready(function () {
    $("#scroll").on("click", function (event) {
        var offset = $(".Sec6").offset();
        $("html body").animate({
            scrollTop: offset.top
        }, 400);
    });
});