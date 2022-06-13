
// 스팟 클릭시 설명창 생성
$(function () {
    $(".left").click(function () {
        $(".left").toggleClass("on");
    });
});
//tab 스크립트
$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});

//json 데이터 불러오기
$(document).ready(function() {
    // $(".map>div").click(function() {
    $.ajax({
        url: "../js/place.json", // 어디로 갈거니? // 갈 때 데이터
        type: "get", // 타입은 뭘 쓸거니?
        datatype: "json",
        success: function(data) { // 갔다온 다음 결과값
			$(".map>div").each(function(index) {

				$(this).click(function() {
					$(".left").addClass("on");
					let i = $(this).index() - 7; //앞에 index번호 없앰 svg등 추가로 생겨서
					console.log(i);
					console.log(data[i].name);
					$("#name").text(data[i].name); //배열맞춰서 불러오기
					$("#text").text(data[i].text);
					$("#img").attr("src", data[i].img);
				})
			})
        },
        error: function() {
            alert('error');
        }
    });
});

//코스 애니메이션
$(function(){
    $('#btN1').click(function(){ 
        $('.n_course1').css('display','block');
        $('#n1-1,#n1-2,#n1-3,#n1-5').css('animation-name','Cn1');
        $('#n1-4').css('animation-name','Cn1-1');
        $('.n_course2,.s_course1,.s_course2,.s_course3').css('display','none');
    });
    $('#btN2').click(function(){
        $('.n_course2').css('display','block');
        $('#n2-5,#n2-8,#n2-10,#n2-12,#n2-13').css('animation-name','Cn1');
        $('#n2-1,#n2-2,#n2-3,#n2-4,#n2-6,#n2-7,#n2-9,#n2-11').css('animation-name','Cn1-1');
        $('.n_course1,.s_course1,.s_course2,.s_course3').css('display','none');

    });
    $('#btS1').click(function(){
        $('.s_course1').css('display','block');
        $('#n3-1,#n3-2,#n3-3').css('animation-name','Cn1-1');
        $('#n3-4').css('animation-name','Cn1');
        $('.n_course1,.n_course2,.s_course2,.s_course3').css('display','none');
    });
    $('#btS2').click(function(){
        $('.s_course2').css('display','block');
        $('#n4-1,#n4-2,#n4-3,#n4-4,#n4-5,#n4-6').css('animation-name','Cn1-1');
        $('.n_course1,.n_course2,.s_course1,.s_course3').css('display','none');
    });
    $('#btS3').click(function(){
        $('.s_course3').css('display','block');
        $('#n5-1,#n5-2,#n5-3,#n5-4,#n5-5').css('animation-name','Cn1-1');
        $('.n_course1,.n_course2,.s_course1,.s_course2').css('display','none');
    });
  });

  
  //toggle버튼 테마바꾸기
  $(document).ready(function() {
    $("input:checkbox").on('click', function() {
          if ( $(this).prop('checked') ) {
            $(this).parent().addClass("selected");
            $("html").css("background", "#f0f0f0");
            $("header .logo").css({"background":"url(../img/Logo_star_black.svg) no-repeat"});
            $("footer .cultureLogo").css({"background":"url(../img/Logo_cultural_sun.svg) no-repeat"});
            $("footer .cultureLogo2").css({"background":"url(../img/Logo_cultural2_sun.svg) no-repeat"});
            $(".navButton span").css("background", "#40305f");
            $(".map div p, ul.tabs li").css("color", "#40305f");
            $(".map div p").css("border-left", "2px solid #40305f");
            $(".map .wrap10 p, .map .wrap8 p, .map .wrap4 p, .map .wrap1 p").css("border-left", "none");
            $(".map .wrap10 p, .map .wrap8 p, .map .wrap4 p, .map .wrap1 p").css("border-right", "1.5px solid #40305f");
            $(".course_sun, .sun_road, .sun_tree, #sun, .sunT").css("display", "block");
            $(".star, .course_night, .tree, .lightBar, .road, .ani, #moon, .moonT").css("display", "none");
          } else {
            $(this).parent().removeClass("selected");
            $("html").css("background", "#40305f");
            $("header .logo").css({"background":"url(../img/Logo_star.svg) no-repeat"});
            $("footer .cultureLogo").css({"background":"url(../img/Logo_cultural.svg) no-repeat"});
            $("footer .cultureLogo2").css({"background":"url(../img/Logo_cultural2.svg) no-repeat"});
            $(".navButton span").css("background", "#FFF4D7");
            $(".star").css("display", "block");
            $(".map div p, ul.tabs li").css("color", "white");
            $(".map div p").css("border-left", "2px solid white");
            $(".map .wrap10 p, .map .wrap8 p, .map .wrap4 p, .map .wrap1 p").css("border-left", "none");
            $(".map .wrap10 p, .map .wrap8 p, .map .wrap4 p, .map .wrap1 p").css("border-right", "1.5px solid white");
            $(".star, .course_night, .tree, .lightBar, .road, .ani, #moon, .moonT").css("display", "block");
            $(".course_sun, .sun_road, .sun_tree, #sun, .sunT").css("display", "none");
          }
        });
    });