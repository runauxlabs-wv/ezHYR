// 스팟 클릭시 설명창 생성
// $(function () {
//     $(".place1").click(function () {
//         $(".left").toggleClass("on");
//     });
// });
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
//코스 애니메이션 실행
// $("#n2").click(function(event){
//     event.preventDefault();
//     $(".n_course1").hide("fast");
//    });
//       $("#n1").click(function(){
//     $(".n_course1").show("fast");
//    });

//json 데이터 불러오기
// $.ajax({
//     type: "GET",
//     url: "../js/place.json",
//     dataType: "json",
//     // data3.json파일에서 {}는 각 객체를 의미하며, $.each()에서 obj라는 파라미터로 불림
//     success: function(data) { // 파라미터 data는 data3.json의 전체 데이터를 의미한다.
//         var elem = ""; // 빈 문자열 변수 생성
//         console.log(data); // 배열 확인
//         $(document).ready(function (){
//             $(".place1").click(function(){
//                 $()
//             })
//         })
//     // error: function(xhr) {
//     //     console.log(xhr.status + "/" + xhr.errorText);
//     // }
//     }
// });
$(document).ready(function() {
	$(".map>div").click(function() {
		$.ajax({
			url : "../js/place.json", // 어디로 갈거니? // 갈 때 데이터
			type : "get", // 타입은 뭘 쓸거니?
			datatype : "json",
			success : function(data) { // 갔다온 다음 결과값
				// alert('seccuss');	// 나오면 파일을 찾았다는 것
				// alert(data);  // [object Object],[object Object],[object Object]
				
			// 데이터를 확인하고 싶을 때.
			//	let str = JSON.stringify(data); // <> parse()
			//	alert(str); 
            $(".map>div").each(function(){
                $(this).click(function(){
                    $(".left").toggleClass("on");
                    // var index=$(this).index()
                    // $("#name").text(data[index].name);
                    // 	$("#text").text(data[index].text);
                    // 	$("#img").attr("src", data[index].img);
                    $.each(data, function(index,object) {
                         $("#name").text(object.name);
                    	$("#text").text(object.text);
                    	$("#img").attr("src", object.img);
                    })
                })
            })
				// $.each(data, function(index, item) { // 데이터 =item 
				// 	$("#name").text(item.name + " ");
				// 	$("#text").append(item.text + " ");
				// 	$("#img").append(item.img + " ");
				// });
			},
			error : function() {
				alert('error');			
			}
		});
	});
});
