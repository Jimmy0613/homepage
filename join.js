var input_id;
var input_pw;
var input_pw_check;
var input_userName;
var input_email;
var input_birth_y;
var input_birth_m;
var input_birth_d;
var input_sex;
var input_tel1;
var input_tel2;
var input_tel3;

var id;
var pw;
var pw_check;
var userName;
var email;
var birth_y;
var birth_m;
var birth_d;
var sex;
var tel1;
var tel2;
var tel3;

window.onload = function () {
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_pw_check = document.getElementById("pw_check");
    input_userName = document.getElementById("userName");
    input_email = document.getElementById("email");
    input_birth_y = document.getElementById("birth_y");
    input_birth_m = document.getElementById("birth_m");
    input_birth_d = document.getElementById("birth_d");
    input_sex = document.getElementsByName("sex");
    input_tel1 = document.getElementById("tel1");
    input_tel2 = document.getElementById("tel2");
    input_tel3 = document.getElementById("tel3");
}



function idCheck() {
    if (6 <= id.length && id.length <= 12) {
        console.log("적절한 id");
        return true;
    } else {
        console.log("부적절한 id");
        return false;
    }
}
function pwCheck() {
    if (8 <= pw.length && pw.length <= 16) {
        console.log("적절한 pw");
        return true;
    } else {
        console.log("부적절한 pw");
        return false;
    }
}
function pwCheck2() {
    if (pw == pw_check) {
        console.log("pw가 일치함");
        return true;
    } else {
        console.log("pw가 일치하지 않음");
        return false;
    }
}
function nameCheck() {
    if (userName.length >= 2) {
        console.log("적절한 이름");
        return true;
    } else {
        console.log("부적절한 이름");
        return false;
    }
}

function inputCheck() {

    id = input_id.value;
    pw = input_pw.value;
    pw_check = input_pw_check.value;
    userName = input_userName.value;
    email = input_email.value;
    birth_y = input_birth_y.value;
    birth_m = input_birth_m.value;
    birth_d = input_birth_d.value;
    if (input_sex == "M"){
        sex="남"
    } else {
        sex="여"
    }
    tel1 = input_tel1.value;
    tel2 = input_tel2.value;
    tel3 = input_tel3.value;

    if (idCheck() && pwCheck() && pwCheck2() && nameCheck()) {
        alert("<가입 정보>\n아이디:" + id + "\n이름" + userName + "\n이메일:" + email + "\n생년월일" + birth_y + "/" + birth_m + "/" + birth_d + "\n성별:" + sex + "\n휴대폰 번호:" + tel1 + "-" + tel2 + "-" + tel3);
    } else {
        alert("회원가입 실패.");
    }
}
