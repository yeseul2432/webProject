function over(obj) {
obj.src="media/banana.png";
}
function out(obj) {
obj.src="media/apple.png";
}

// function rec() {
//     var price = document.getElementById("price");
//     // var price = prompt("예산이 얼마입니까?");
//     price = Number(price);        
//     if(price<=20000){
//         document.write("hello")
//     // <a href="javascript:scroll(0,0)"></a>
//     }
// }

// function goTop(){
// 	$('html').scrollTop(0);
// 	// scrollTop 메서드에 0 을 넣어서 실행하면 끝 !!
// 	// 간혹 이 소스가 동작하지 않는다면
// 	// $('html, body') 로 해보세요~
// }

var files = ["img/img01.jpg","img/img02.jpg","img/img03.jpg"];
var imgs = new Array();
for(var i=0; i<files.length; i++){
    imgs[i] = new Image();
    imgs[i].src = files[i];
}
var next = 1;
function change(img){
    img.src = imgs[next].src;
    next++;
    next %= imgs.length;
}


var sum=0;
function calc(cBox) {
    if(cBox.checked)
    sum += parseInt(cBox.value);
    else
    sum -= parseInt(cBox.value);
    document.getElementById("sumtext").value = sum;
}

function WinClose()
 {
   window.open('','_self').close();     
}

function modeCh(color){
    document.body.style.background=color;
}