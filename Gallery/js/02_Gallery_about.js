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
    // 다시보기(함수이용)
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