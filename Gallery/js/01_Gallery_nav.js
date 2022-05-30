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