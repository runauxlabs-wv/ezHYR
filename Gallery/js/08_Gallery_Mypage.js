// 로그인관련 span추가가 반복

window.onload = function() {
    var login = document.login;
    login.onsubmit = function() {
        span = document.getElementById("message");
        txt = document.createTextNode("");
        span.appendChild(txt);
        if(!login.id.value){
            span.textContent("아이디를 입력해주세요");
            login.id.focus();
            return false;
        }
        if(!login.pw.value){
            span.textContent("비밀번호를 입력해주세요");
            login.id.focus();
            return false;
        }
        span.textContent("");
        alert('해당 페이지는 포트폴리오 사이트로 로그인 할 수 없습니다.')
    }
}










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