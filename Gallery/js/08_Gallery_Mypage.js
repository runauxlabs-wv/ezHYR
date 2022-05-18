// 로그인관련 span추가가 반복

window.onload = function() {
    var login = document.login;
    login.onsubmit = function() {
        if(!login.id.value){
            span = document.getElementById("message");
            txt = document.createTextNode("아이디를 입력해주세요");
            span.appendChild(txt);
            login.id.focus();
            return false;
        }
        if(!login.pw.value){
            span = document.getElementById("message");
            txt = document.createTextNode("비밀번호를 입력해주세요");
            span.appendChild(txt);
            login.pw.focus();
            return false;
        }
        else{
            span = document.getElementById("message");
            txt = document.createTextNode("잘못입력하였습니다. 아이디와 비밀번호를 확인해주세요");
            span.appendChild(txt);
            login.id.focus();
            return false;
        }
    }
}