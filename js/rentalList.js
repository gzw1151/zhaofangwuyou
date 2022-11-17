var list=document.getElementsByClassName('list')[0];
var a_=document.getElementsByClassName('a_');
var hide=document.getElementsByClassName('hide')[0];
var div_=document.getElementsByClassName('div_')[0];
var top_=document.getElementsByClassName('top_');
var area=document.getElementsByClassName('area')[0];
var price=document.getElementsByClassName('price')[0];
var house=document.getElementsByClassName('house')[0];
var more=document.getElementsByClassName('more')[0];
var some_ = document.getElementsByClassName('some_');
var span_=document.getElementsByClassName('span_');
for(var i=0;i<a_.length;i++){
    a_[i].setAttribute('index',i);
    a_[i].onclick = function() {
        var index=this.getAttribute('index');
        for(var k=0;k<some_.length;k++){
            some_[k].style.display = "none";
            some_[index].style.display = "block";
            some_[index].style.display = "flex";
        }
        div_.style.display = "block";
        hide.style.display = "block";
        for(var j=0;j<top_.length; j++){
            top_[j].className='top_'
            top_[index].className='top_ act_'
            span_[j].className='span_';
            span_[index].className = 'span_ span_1'
        }
        hide.onclick=function() {
            some_[index].style.display = "none";
            div_.style.display = "none";
            hide.style.display = "none";
            top_[index].className = "top_"
            span_[index].className = "span_"
        }
    }
}


