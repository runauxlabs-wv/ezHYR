// 로그인관련 span추가가 반복

function validate() {
    const regId = /^[a-zA-Z0-9]{4,12}$/;
    // 아이디 정규식
    const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    // 패스워드 정규식, 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
    const regNull  = /\s/g;
    // 빈값
    
    let id = document.getElementById("id");
    let pw = document.getElementById("pw");
    // 정규식 조건에 위배되었을 때, alert이 출력되는 함수였다.
    // 요 값이 true이고 이걸 부정한 조건(false)일 때 넘어간다.

    // 아이디 정규식 확인
    if (!checkReg(regId, id, "아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
        return false;
    }

    // 비밀번호 정규식 확인
    if (!checkReg(regPw, pw, "최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자로만 입력")) {
        return false;
    }
    // 비밀번호 빈값확인
    if (!checkNull(pw, "비밀번호를 입력해 주세요")) {
        return false;
    }
}
// 정규식 확인
function checkReg(reg, what, message) {
    // 정규식에 위배되지 않았을때
    let alertMSG = what.parentNode.lastElementChild;
    if (reg.test(what.value)) {
        alertMSG.textContent = ""; // 메시지 공백화
        return true;
    }
    // 정규식에 위배되었을때
    alertMSG.textContent = message; // 메시지 출력
    what.value = ""; // 해당 위치 공백화
    what.focus(); // 해당위치로 포커싱
}
// 빈값 확인
function checkNull(what, message) {
    // 빈값없음
    let alertMSG = what.parentNode.lastElementChild;
    if (what.value !== "") {
        alertMSG.textContent = "해당페이지는 포트폴리오 사이트로 로그인 할 수 없습니다";
        return true;
    }
    // 빈값확인
    alertMSG.textContent = message; // 메시지 출력
    what.focus(); // 해당위치로 포커싱
}


let inputs = document.querySelectorAll('input');
Array.from(inputs).forEach((eachInput) => {
    eachInput.addEventListener('blur', (e) => validate(e));
});
const validation = document.querySelector('#validation');
validation.addEventListener('click', (e) => validate(e));






























// span.removeChild(txt); 상단삭제하는 태그작성 > 있을때만 먹히고 오류페이지로 넘어감
// location.reload(true); 새로고침 태그작성 > 너무 잠깐뜨고사라짐
// login.onsubmit = function() {
//     if(!login.id.value){
//         // location.reload(true);
//         span = document.getElementById("message");
//         txt = document.createTextNode("아이디를 입력해주세요");
//         span.appendChild(txt);
//         login.id.focus();
//         return false;
//     }
//     else if(!login.pw.value){
//         // span.removeChild(txt);
//         span = document.getElementById("message");
//         txt = document.createTextNode("비밀번호를 입력해주세요");
//         span.appendChild(txt);
//         login.pw.focus();
//         return false;
//     }
//     else{
//         span = document.getElementById("message");
//         alert('해당 페이지는 포트폴리오 사이트로 로그인 할 수 없습니다.뒤로가기 버튼을 눌러 페이지를 다시 이동해주세요')
//         txt = document.createTextNode("");
//         login.id.focus();
//     }
// }


// 로그인관련 span추가가 반복

// window.onload = function() {
//     var login = document.login;
//     login.onsubmit = function() {
//         span = document.getElementById("message");
//         txt = document.createTextNode("");
//         span.appendChild(txt);
//         if(!login.id.value){
//             span.textContent("아이디를 입력해주세요");
//             login.id.focus();
//             return false;
//         }
//         if(!login.pw.value){
//             span.textContent("비밀번호를 입력해주세요");
//             login.id.focus();
//             return false;
//         }
//         span.textContent("");
//         alert('해당 페이지는 포트폴리오 사이트로 로그인 할 수 없습니다.')
//     }
// }
