var input_id;
var input_pw;
var loginbox;
var str_id="";
var str_pw="";
var timeBox;
var local_id="lmj613";
var local_pw="7039";

window.onload = function (){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    loginbox = document.getElementById("loginbox");
    timeBox = document.getElementById("time");
    timeBox.innerHTML = timeStr;
}
var time = new Date();
var timeStr = time.getFullYear() + "년 " + (time.getMonth()+1) + "월 " + time.getDate() + "일 " + time.getHours() + "시 " + time.getMinutes() + "분 " + time.getSeconds() + "초 " + time.getMilliseconds() + "밀리초";



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
