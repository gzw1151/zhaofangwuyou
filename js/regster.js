// 排他法切换

var color = document.getElementsByClassName('inputbox2');
var a = document.getElementsByTagName('i')

console.log(a);


console.log(a);
for (var i = 0; i < a.length; i++) {
    a[i].setAttribute('index', i);

    a[i].onclick = function () {

        var index = this.getAttribute('index');
        console.log(index);

        for (var j = 0; j < a.length; j++) {
            a[j].className = 'a1';
            a[index].className = 'active';
        }
        for (var k = 0; k < color.length; k++) {
            color[k].style.display = 'none';
            color[index].style.display = 'block';
        }
    }
}
//
// 手机登录
var tel = document.getElementById('tel')
var pas = document.getElementById('pas')
var bth = document.getElementsByClassName("bth")[0];
bth.addEventListener("click", function () {
    var telLocalStorage = window.localStorage.getItem("tel");
    var pwdLocalStorage = window.localStorage.getItem("pwd");
    // console.log(telLocalStorage);
    // console.log(pwdLocalStorage);
    if (tel.value == telLocalStorage && pas.value == pwdLocalStorage) {
        alert("登录成功");
        window.location.href = "./index.html";
        window.localStorage.setItem("succeed", true);
    } else {
        alert("用户名/密码输入错误");
        window.localStorage.setItem("succeed", false);
    }
})
// 验证码登录

