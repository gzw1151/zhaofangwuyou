function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    client_w = client_w > 800 ? 800 : client_w;
    client_w = client_w < 325 ? 325 : client_w;
    // console.log(ui_w, client_w);
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
};

// 当页面加载的时候  也要调用一下setRem 目的  默认 把html 根节点的字体大小 设置为10px

window.onload = setRem;

