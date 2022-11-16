
function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;

    // 如果设备宽度大于600  等于600
    client_w = client_w > 600 ? 600 : client_w;
    client_w = client_w < 250 ? 250 : client_w;
    console.log(ui_w, client_w);
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

var timer = null;




window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
};