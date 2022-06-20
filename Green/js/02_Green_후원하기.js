$(document).ready(function () {
    $(".main .step h1:first-child").addClass("click");
    $(".Step1").addClass('on');

    $(document).on("click", ".step1 a", function () {
        $(".main .step h1").removeClass("click");
        $(".main .step .nth2").addClass("click");
        $("dd").removeClass('on');
        $(".Step2").addClass('on');
    });
    $(document).on("click", ".step2 a", function () {
        $(".main .step h1").removeClass("click");
        $(".main .step h1:last-child").addClass("click");
        $("dd").removeClass('on');
        $(".Step3").addClass('on');
    });
    $(document).on("click", ".main .step h1:first-child", function () {
        $(".main .step h1").removeClass("click");
        $(".main .step h1:first-child").addClass("click");
        $("dd").removeClass('on');
        $(".Step1").addClass('on');

    });
    $(document).on("click", ".main .nth2", function () {
        $(".step1 a").click()
    });
    $(document).on("click", ".main .step h1:last-child", function () {
        $(".step2 a").click()
    });
    // $('button').click(function () {
    //     $(this).addClass('click');
    // });
    // 다른 button클릭시 사라지지 않음, 다시눌러도 사라지지 않음

    // $(document).on("click", "button", function () {
    //     button = $('button'); 
    //     button.toggle(
    //         function(){button.addClass('click')}, //클릭하면 show클래스 적용되서 보이기

    //         function(){button.removeClass('click')} //한 번 더 클릭하면 hide클래스가 숨기기

    //       );
    //   });
    // toggle이기 때문에 아예 레이어가 사라짐

    // $('button').each(function (index) {
    //     $(this).attr('button-index', index);
    // }).click(function () {
    //     var index = $(this).attr('button-index');
    //     $('button[button-index=' + index + ']').addClass('click');
    //     $('button[button-index!=' + index + ']').removeClass('click');
    // });
    // index를 전체에 주어서 밑에 폼으로 내려갔을때 상단에 클릭효과가 적용되지 않음

    // $(document).on("click", "div>button", function () {
    //     $(this).removeClass('click');
    //     $(this).addClass('click');
    // });
    // remove가 전체로 되어 위와 같이 내려갔을때 상단 클릭효과가 적용되지않음

    $(document).on("click", "div>button", function () {
        $(this).addClass('click').siblings().removeClass('click');
    });
    //siblings로 해결 siblings:선택한 요소의 형제(sibling) 요소 중에서 지정한 선택자에 해당하는 요소를 모두 선택한다.
});

