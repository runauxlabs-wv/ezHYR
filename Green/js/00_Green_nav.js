$(document).ready(function () {
    if (window.innerWidth > 1200){
    $(".nav").mouseenter(function () {
        $('.subNav').addClass("on");
    });
    $(".subNav").mouseleave(function () {
        $('.subNav').removeClass("on");
    });
    $(".nav").mouseenter(function () {
        $('.subNav').addClass("on");
    });
    $(".subNav").mouseleave(function () {
        $('.subNav').removeClass("on");
    });
}else if (window.innerWidth > 760){
    $("#nav1").click(function () {
        $("#menu1").css("display","block");
        $("#nav2").css("margin-top","495px");
        $("#menu2,#menu3,#menu4,#menu5").css("display","none");
        $("#nav3,#nav4,#nav5").css("margin-top","0");
    });
    $("#nav2").click(function () {
        $("#menu2").css("display","block");
        $("#nav3").css("margin-top","510px");
        $("#nav2,#nav4,#nav5").css("margin-top","0");
        $("#menu1,#menu3,#menu4,#menu5").css("display","none");
    });
    $("#nav3").click(function () {
        $("#menu3").css("display","block");
        $("#nav4").css("margin-top","495px");
        $("#nav2,#nav3,#nav5").css("margin-top","0");
        $("#menu1,#menu2,#menu4,#menu5").css("display","none");
    });
    $("#nav3").click(function () {
        $("#menu3").css("display","flex");
        $("#nav4").css("margin-top","355px");
        $("#nav2,#nav3,#nav5").css("margin-top","0");
        $("#menu1,#menu2,#menu4,#menu5").css("display","none");
    });
    $("#nav4").click(function () {
        $("#menu4").css("display","flex");
        $("#nav5").css("margin-top","270px");
        $("#nav2,#nav3,#nav4").css("margin-top","0");
        $("#menu1,#menu2,#menu3,#menu5").css("display","none");
    });
    $("#nav5").click(function () {
        $("#menu5").css("display","flex");
        $("#nav2,#nav3,#nav4,#nav5").css("margin-top","0");
        $("#menu1,#menu2,#menu3,#menu4").css("display","none");
    });
     }else{
        $("#nav1").click(function () {
            $("#menu1").css("display","flex");
            $("#nav2").css("margin-top","44px");
            $("#menu2,#menu3,#menu4,#menu5").css("display","none");
            $("#nav3,#nav4,#nav5").css("margin-top","0");
        });
        $("#nav2").click(function () {
            $("#menu2").css("display","flex");
            $("#nav3").css("margin-top","44px");
            $("#nav2,#nav4,#nav5").css("margin-top","0");
            $("#menu1,#menu3,#menu4,#menu5").css("display","none");
        });
        $("#nav3").click(function () {
            $("#menu3").css("display","flex");
            $("#nav4").css("margin-top","70px");
            $("#nav2,#nav3,#nav5").css("margin-top","0");
            $("#menu1,#menu2,#menu4,#menu5").css("display","none");
        });
        $("#nav4").click(function () {
            $("#menu4").css("display","flex");
            $("#nav5").css("margin-top","44px");
            $("#nav2,#nav3,#nav4").css("margin-top","0");
            $("#menu1,#menu2,#menu3,#menu5").css("display","none");
        });
        $("#nav5").click(function () {
            $("#menu5").css("display","flex");
            $("#nav2,#nav3,#nav4,#nav5").css("margin-top","0");
            $("#menu1,#menu2,#menu3,#menu4").css("display","none");
        });
    }
});

$("#open").click(function () {
    $(".nav").addClass("on");
    $('.subNav').css("transform","translateX(0)");
});
$("#close").click(function () {
    $(".nav").removeClass("on");
    $('.subNav').css("transform","translateX(150%)");
});