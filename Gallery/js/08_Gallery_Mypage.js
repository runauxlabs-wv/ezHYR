// 로그인관련 span추가가 반복

window.onload = function() {
    var login = document.login;
    login.onsubmit = function() {
        if(!login.id.value){
            // location.reload(true);
            span = document.getElementById("message");
            txt = document.createTextNode("아이디를 입력해주세요");
            span.appendChild(txt);
            login.id.focus();
            return false;
        }
        else if(!login.pw.value){
            // span.removeChild(txt);
            span = document.getElementById("message");
            txt = document.createTextNode("비밀번호를 입력해주세요");
            span.appendChild(txt);
            login.pw.focus();
            return false;
        }
        else{
            span = document.getElementById("message");
            alert('해당 페이지는 포트폴리오 사이트로 로그인 할 수 없습니다.뒤로가기 버튼을 눌러 페이지를 다시 이동해주세요')
            login.id.focus();
        }
    }
}