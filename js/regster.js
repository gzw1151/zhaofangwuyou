// 排他法切换

var color = document.getElementsByClassName('inputbox2');
var a = document.getElementsByTagName('i')
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
var tel = document.getElementsByClassName('tel')[0]
var pas = document.getElementsByClassName('pas')[0]
var bth = document.getElementsByClassName("bth")[0];
var span = document.getElementsByClassName('s')
var telLocalStorage = window.localStorage.getItem("tel");
console.log(telLocalStorage);
console.log(span, tel);
tel.addEventListener("focus", function () {
    span[0].innerHTML = "请输入已注册的手机号";
});
tel.onblur = function () {
    if (tel.value != telLocalStorage) {
        span[0].innerHTML = "手机号不存在"
    } else
        span[0].innerHTML = "已注册的手机号";
}
bth.addEventListener("click", function () {
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
var tel1 = document.getElementsByClassName('tel')[1]
var yzm = document.getElementById('yzm')
var hqyzm = document.getElementById('hqyzm')
var bth1 = document.getElementsByClassName("bth")[1];
var telBool = false
tel1.addEventListener("focus", function () {
    span[2].innerHTML = "请输入已注册的手机号";
});
tel1.onblur = function () {
    if (tel1.value != telLocalStorage) {
        span[2].innerHTML = "手机号不存在"
        telBool = false
    } else
        span[2].innerHTML = "已注册的手机号";
    telBool = true
}
// 验证码功能
var num = "59";
var timer = null;
var randomNum = [];
yzm.addEventListener("click", function () {
    if (telBool) {
        clearInterval(timer);
        timer = setInterval(function () {
            num--;
            yzm.innerHTML = "( " + num + " 秒 ) 重发";
            if (num == "0") {
                clearInterval(timer);
                num = 59;
                yzm.innerHTML = "重新获取验证码";
            }
            if (num == "58") {
                alert("您的验证码为" + randomNum + " 10分钟内有效,请尽快注册");
            }
        }, 1000)
    }

})
// 生成4个随机的个位数
for (var i = 0; i < 4; i++) {
    var sum = Math.floor(Math.random() * 10);
    randomNum.push(sum);
}
var randomNum = randomNum.join("");
var yzBool = false;
hqyzm.onfocus = function () {
    span[3].innerHTML = "请输入验证码";
}
hqyzm.onblur = function () {
    if (hqyzm.value == "") {
        span[3].innerHTML = "验证码不能为空";
        yzBool = false;
    } else if (hqyzm.value != randomNum) {
        span[3].innerHTML = "验证码输入错误";
        yzBool = false;
    } else {
        span[3].innerHTML = "正确";
        yzBool = true;
    }
}
bth1.onclick = function () {
    if (yzBool == true && telBool == true) {
        alert("登录成功");
        window.location.href = "../index.html";
        window.localStorage.setItem("succeed", true);
    } else {
        alert("用户名/密码输入错误");
        window.localStorage.setItem("succeed", false);
    }
}



