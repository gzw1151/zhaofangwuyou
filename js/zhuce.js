// 获取 

var tel = document.getElementById('tel')
var yzm = document.getElementById('yzm')
var hqyzm = document.getElementById('hqyzm')
var pas = document.getElementById('pas')
var bth = document.getElementsByClassName('bth')[0]
var span_ = document.getElementsByClassName('s')

console.log(tel, yzm, hqyzm, pas, bth, span_);

// 事件号码功能
var telBool = false;
var reg = /^1[3-9][0-9]{9}$/;

tel.onfocus = function () {
    span_[0].innerHTML = "请输入1~11位手机号码";
}
tel.onblur = function () {
    var judge = reg.test(tel.value);
    // console.log(judge);
    if (tel.value == "") {
        span_[0].innerHTML = "手机号不能为空";
        telBool = false;
    } else if (!judge) {

        span_[0].innerHTML = "输入格式错误请重新输入";
        telBool = false;
    } else {

        span_[0].innerHTML = "正确";
        telBool = true;
    }
}

// 验证码功能
var num = "59";
var timer = null;
var randomNum = [];
// 验证码功能
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
// 生成五个随机的个位数
for (var i = 0; i < 4; i++) {
    var sum = Math.floor(Math.random() * 10);
    randomNum.push(sum);
}
var randomNum = randomNum.join("");
var yzBool = false;
hqyzm.onfocus = function () {
    span_[1].innerHTML = "请输入验证码";
}
hqyzm.onblur = function () {
    if (hqyzm.value == "") {
        span_[1].innerHTML = "验证码不能为空";
        yzBool = false;
    } else if (hqyzm.value != randomNum) {
        span_[1].innerHTML = "验证码输入错误";
        yzBool = false;
    } else {
        span_[1].innerHTML = "正确";
        yzBool = true;
    }
}

// 密码
var pwdBool = false;
pas.onfocus = function () {
    span_[2].innerHTML = "请输入密码(密码为六位数字)";
}
pas.onblur = function () {
    var reg1 = /^\d{6}$/;
    if (pas.value == "") {
        span_[2].innerHTML = "密码不能为空";
        pwdBool = false;
    } else if (!reg1.test(pas.value)) {
        span_[2].innerHTML = "密码格式错误";
        pwdBool = false;
    } else {
        span_[2].innerHTML = "正确";
        pwdBool = true;
    }
}

bth.onclick = function () {
    if (telBool == true && yzBool == true && pwdBool == true) {
        alert("注册成功");
        // localStorage 存储 内容
        window.localStorage.setItem("tel", tel.value);
        window.localStorage.setItem("pwd", pas.value);
        setTimeout(function () {
            window.location.href = "../login.html";
        }, 1000);
    } else {
        alert("注册失败");
    }

}
