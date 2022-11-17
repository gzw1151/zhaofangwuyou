var close = document.getElementById('close');
var download = document.getElementById('download');
close.onclick = function () {
    download.style.display = 'none';
}
let myBtn = document.getElementsByClassName("a11")[0];

console.log(myBtn);
// 判断用户是否登录成功

if (window.localStorage.getItem("succeed")) {
    myBtn.onclick = function () {
        window.location.href = "../mylogin.html";
    };
} else {
    myBtn.onclick = function () {
        window.location.href = "./my.html";
    };
}


