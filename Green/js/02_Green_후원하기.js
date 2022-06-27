$(document).ready(function () {
    //폼 열리고 닫히기, 상단 번호누르면 이동
    $(".main .step h1:first-child").addClass("click");
    $(".Step1").addClass('on');

    $(".step1 a").click(function () {
        $(".main .step h1").removeClass("click");
        $(".main .step .nth2").addClass("click");
        $("dd").removeClass('on');
        $(".Step2").addClass('on');
    });
    $(".step2 a").click(function () {
        $(".main .step h1").removeClass("click");
        $(".main .step h1:last-child").addClass("click");
        $("dd").removeClass('on');
        $(".Step3").addClass('on');
    });
    $(".main .step h1:first-child").click(function () {
        $(".main .step h1").removeClass("click");
        $(".main .step h1:first-child").addClass("click");
        $("dd").removeClass('on');
        $(".Step1").addClass('on');

    });
    $(".main .nth2").click(function () {
        $(".step1 a").click()
    });
    $(".main .step h1:last-child").click(function () {
        $(".step2 a").click()
    });
    $(".next.step3").click(function () {
        alert("해당페이지는 포트폴리오 사이트로 결제를 진행할 수 없습니다.");
    });
    //버튼클릭
    $("div>button").click(function () {
        $(this).addClass('click').siblings().removeClass('click');
    });
    //전체 폼 입력확인
    var named = RegExp(/^[가-힣]+$/);
    $(".next.step1").click(function () {
        if ($(".how-click").hasClass("click")) {} else {
            alert("후원방식을 선택해주세요.");
            return false;
        }
        if ($(".much-click").hasClass("click")) {} else {
            alert("후원금액을 선택해주세요.");
            return false;
        }
    });
    $(".next.step2").click(function () {
        if ($(".who button").hasClass("click")) {} else {
            alert("회원유형을 선택해주세요.");
            return false;
        }
        if ($(".name").val() == "") {
            alert("후원자 성함을 입력해주세요");
            $(".name").focus();
            return false;
        } else if (!named.test($(".name").val())) {
            alert("후원자 성함을 형식에 맞게 입력해주세요");
            $(".name").val("");
            $(".name").focus();
            return false;
        } else {}
        if ($(".male button").hasClass("click")) {} else {
            alert("후원자 성별을 선택해주세요.");
            return false;
        }
        if ($(".birthday").val() == "") {
            alert("후원자 생년월일을 입력해주세요");
            $(".birthday").focus();
            return false;
        } else {}
        if ($(".phone1").val() == "") {
            alert("후원자 휴대폰번호 가운데자리를 입력해주세요");
            $(".phone1").focus();
            return false;
        } else {}
        if ($(".phone2").val() == "") {
            alert("후원자 휴대폰번호 마지막자리를 입력해주세요");
            $(".phone2").focus();
            return false;
        } else {}
        if ($(".email").val() == "") {
            alert("후원자 이메일을 입력해주세요");
            $(".email").focus();
            return false;
        } else {}
        if ($(".question button").hasClass("click")) {} else {
            alert("기부금 영수증 발급여부를 선택해주세요.");
            return false;
        }
    });
    $(".next.step3").click(function () {
        if ($(".credit button").hasClass("click")) {} else {
            alert("결제방법을 선택해주세요.");
            return false;
        }
        if ($(".check1").is(":checked")) {} else {
            alert("후원을 위해 개인정보 수집이용에 동의해주세요.");
            return false;
        }
        if ($(".check2").is(":checked")) {} else {
            alert("후원을 위해 어린이재단 이용약관에 동의해주세요.");
            return false;
        }
    });
    //top 내부 메뉴 바 나오게하기
    $(".Sub1").click(function () {
        $(".menuSub1").toggleClass("on");
    });

    //후원금 계산
    $(".much button").click(function () {
        var t =$(this).text()
        $("#money").text(t);
    });
});

//이메일 select 추출 후 가져오기
function selectbox(e) {
    const text = e.options[e.selectedIndex].text;  
    document.getElementById('result').innerText = text;
}
function printName()  {
    const name = document.getElementById('name').value;
    document.getElementById("money").innerText = name;
}

