function over(obj) {
obj.src="media/banana.png";
}
function out(obj) {
obj.src="media/apple.png";
}


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

function WinClose(){
    window.open('','_self').close();
    // window.close();
    // self.close();
    // window.opener = window.location.href; self.close();
    // window.open('about:blank', '_self').close();
}

function modeChN(color){
    document.body.style.background=color;
    $('#text').css('color', '#6F3B48');
    $('#which').css('color', '#6F3B48');
}

function modeChD(color){
    document.body.style.background=color;
    $('#text').css('color', 'black');
    $('#which').css('color', 'black');
}

function mainAlert(){
    alert("이제부터 좋아해 보세요!");
}

function load(){

    var loc = Math.random()*3;
    var location = Math.floor(loc)+1;

    switch(location){
        case 1:
            window.open('page1.html');
            break;
        case 2:
            window.open('page2.html');
            break;
        case 3:
            window.open('page3.html');
            break;
        default:
            window.open('page1.html');
    }
}


//시계
// const clockTarget = document.querySelector('.clock');

// function clock() {

//     var clockTarget = document.getElementById("clock");

//     var date = new Date();

//     // date Object를 받아오고 
//     var month = date.getMonth();

//     // 달을 받아옵니다 
//     var clockDate = date.getDate();

//     // 몇일인지 받아옵니다 
//     var day = date.getDay();

//     // 요일을 받아옵니다. 
//     var week = ['일', '월', '화', '수', '목', '금', '토'];

//     // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듭니다. 
//     var hours = date.getHours();

//     // 시간을 받아오고 
//     var minutes = date.getMinutes();

//     // 분도 받아옵니다.
//     var seconds = date.getSeconds();

//     // 초까지 받아온후 
//     clockTarget .innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일` +

//     `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;

//     // 월은 0부터 1월이기때문에 +1일을 해주고 

//     // 시간 분 초는 한자리수이면 시계가 어색해보일까봐 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 했습니다. 
// }

// function init() {

// clock();

// // 최초에 함수를 한번 실행시켜주고 
// setInterval(clock, 1000);

// // setInterval이라는 함수로 매초마다 실행을 해줍니다.

// // setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받습니다. 1000 = 1초 

// }

// init();
// function printClock() {
    
//     var clock = document.getElementById("clock");            // 출력할 장소 선택
//     var currentDate = new Date();                                     // 현재시간
//     var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
//     var amPm = 'AM'; // 초기값 AM
//     var currentHours = addZeros(currentDate.getHours(),2); 
//     var currentMinute = addZeros(currentDate.getMinutes() ,2);
//     var currentSeconds =  addZeros(currentDate.getSeconds(),2);
    
//     if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
//     	amPm = 'PM';
//     	currentHours = addZeros(currentHours - 12,2);
//     }

//     if(currentSeconds >= 50){// 50초 이상일 때 색을 변환해 준다.
//        currentSeconds = '<span style="color:#de1951;">'+currentSeconds+'</span>'
//     }
//     clock.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds +" <span style='font-size:50px;'>"+ amPm+"</span>"; //날짜를 출력해 줌
    
//     setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
// }

// function addZeros(num, digit) { // 자릿수 맞춰주기
// 	  var zero = '';
// 	  num = num.toString();
// 	  if (num.length < digit) {
// 	    for (i = 0; i < digit - num.length; i++) {
// 	      zero += '0';
// 	    }
// 	  }
// 	  return zero + num;
// }

