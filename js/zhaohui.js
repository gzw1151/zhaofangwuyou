var tel = document.getElementById('tel')
var yzm = document.getElementById('yzm')
var hqyzm = document.getElementById('hqyzm')
var npas = document.getElementById('npas')
var npas1 = document.getElementById('npas1')
var bth = document.getElementsByClassName('bth')[0]
var span_ = document.getElementsByClassName('s')

console.log(tel, yzm, hqyzm, npas, npas1, bth, span_);
var telBool = false;
tel.addEventListener("focus", function () {
    span_[0].innerHTML = "请输入已注册的手机号";
});
tel.addEventListener("blur", function () {
    let registerTel = window.localStorage.getItem("tel");
    if (registerTel != null && tel.value == registerTel) {
        span_[0].innerHTML = "手机号码已注册";
        // 手机号码布尔值返回正确
        telBool = true;
    } else {
        // 如果输入为空就清空提示信息
        if (tel.value == "") {
            span_[0].innerHTML = "";
            // 手机号码布尔值返回错误
            telBool = false;
        } else {
            span_[0].innerHTML = "手机号码未注册";
            // 手机号码布尔值返回错误
            telBool = false;
        }
    }
});
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
npas.onfocus = function () {
    span_[2].innerHTML = "请输入密码(密码为六位数字)";
}
npas.onblur = function () {
    var reg1 = /^\d{6}$/;
    if (npas.value == "") {
        span_[2].innerHTML = "密码不能为空";
        pwdBool = false;
    } else if (!reg1.test(npas.value)) {
        span_[2].innerHTML = "密码格式错误";
        pwdBool = false;
    } else {
        span_[2].innerHTML = "正确";
        pwdBool = true;
    }
}
npas1.onfocus = function () {
    span_[3].innerHTML = "须和输入的密码一致";
}
npas1.onblur = function () {
    var reg1 = /^\d{6}$/;
    if (npas1.value == "") {
        span_[3].innerHTML = "确认密码不能为空";
        conBool = false;
    } else {
        if (reg1.test(npas.value)) {
            if (npas.value != npas1.value) {

                span_[3].innerHTML = "两次密码输入不一致";
                conBool = false;
            } else {
                span_[3].innerHTML = "正确";
                conBool = true;
            }
        } else {
            span_[3].innerHTML = "输入错误";
            conBool = false;
        }
    }
}
bth.onclick = function () {
    if (telBool == true && yzBool == true && pwdBool == true) {
        alert("修改成功");
        // localStorage 存储 内容
        window.localStorage.setItem("pwd", npas.value);
        setTimeout(function () {
            window.location.href = "../register.html";
        }, 1000);
    } else {
        alert("注册失败");
    }

}