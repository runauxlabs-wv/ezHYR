// 스팟 클릭시 설명창 생성
$(function () {
    $(".left").click(function () {
        $(".left").toggleClass("on");
    });
//tab 스크립트

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })


//json 데이터 불러오기
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

//코스 애니메이션
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
        $('#n3-1,#n3-2,#n3-3,#n3-4').css('animation-name','Cn1-1');
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
  
//마우스 호버 이벤트
$(".map div img").hover(function(){
    $(this).css("transform","translateY(-8px)");
},function(){
    $(this).css("transform","translateY(8px)");
});
// //코스탭 장소클릭
// $(".click1").click(function(){
//     $('.place1').click();
// });
// $(".click2").click(function(){
//     $('.place2').click();
// });
// $(".click3").click(function(){
//     $('.place3').click();
// });
// $(".click4").click(function(){
//     $('.place4').click();
// });
// $(".click5").click(function(){
//     $('.place5').click();
// });
// $(".click6").click(function(){
//     $('.place6').click();
// });
// $(".click7").click(function(){
//     $('.place7').click();
// });
// $(".click7").click(function(){
//     $('.place7').click();
// });
// $(".click8").click(function(){
//     $('.place8').click();
// });
// $(".click9").click(function(){
//     $('.place9').click();
// });
// $(".click10").click(function(){
//     $('.place10').click();
// });

$('.place li').click(function () {
    var placeCourse = $(this).attr('class');
    console.log(placeCourse);
    var course = placeCourse.substr(placeCourse.length-1, 1);
    console.log(course);
    $(".place" + course).click();
})
$(".click10").click(function(){
    $('.place10').click();
});
//   //toggle버튼 테마바꾸기
    $("input:checkbox").on('click', function() {
          if ( $(this).prop('checked') ) {
            $(this).parent().addClass("selected");
            $('body').addClass("sun");
          } else {
            $(this).parent().removeClass("selected");
            $('body').removeClass("sun");
          }
        });
    });


//모달창 x버튼 누르거나 모달창 외 클릭시 사라지게하기
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
});
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modal.style.display = "none"
    }
});