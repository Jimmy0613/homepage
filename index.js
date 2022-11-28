var input_id;
var input_pw;
var loginbox;
var str_id="";
var str_pw="";

var local_id="lmj613";
var local_pw="7039";

window.onload = function (){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    loginbox = document.getElementById("loginbox");
}

function login() {
    str_id = input_id.value;
    str_pw = input_pw.value;
    if(str_id == local_id && str_pw == local_pw){
        memberlogin();
    } else {
        alert ("로그인 실패");
    }
}

function memberlogin() {
    loginbox.innerHTML = "<p>&nbsp;&nbsp;" + local_id + "회원님!❤</p>";

}