$(function() {
    $("#open").click(function() {
        $(".menu").addClass("on");
    });
    $("#close").click(function() {
        $(".menu").removeClass("on");
    });
});

// id open을 클릭하면 menu on 추가
// id close를 클릭하면 menu on 삭제

// $(function() {
//     var w = $("header .nav .menu a").width();            
//     $("header .nav .menu a").append("<span></span>");
    
//     $("header .nav .menu a").on("mouseenter focusin", function() {
//         var index = $(this).index(); // index() 메서드는 각 li의 index를 취득하는 메서드이다.
//         console.log(index); // 각 li에 마우스를 오버하면 0, 1, 2, 3
        
//         $(this).find("a").addClass("on");
//         $(this).siblings().find("a").removeClass("on");
//         $("header .nav .menu a span").stop().animate({
//             left: index * w // 0 * 150, 1 *  150, 2 * 150, 3 * 150
//         }, "fast", "swing");
//         // .stop()을 사용하지 않으면 사용자가 nav에서 마우스의 움직임을 빠르게 적용할 때 그것이 모두 이벤트로 잡혀서 Queue가 쌓이게 되고 ui의 흐름이 꼬이게 된다.
//     });

//     $("header .nav .menu a:eq(0)").trigger("mouseenter");
//     // on연결 메서드에 적용된 이벤트 메서드를 트리거로 삼는다         
// });