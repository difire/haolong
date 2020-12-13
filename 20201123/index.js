var flag= false;
var cur={
	x:0,
	y:0,
	wanchengyidong:true
}
var nx,ny,dx,dy,x,y;
function down(){
	flag=true;
}
function move(){
	if(flag){
		if (event.touches) {
		touch=event.touches[0];
		if (touch.clientX>122 && touch.clientX<290) {
		label.style.left = touch.clientX-40+"px";
		cur.x=touch.clientX
	}
	}
	else{
		touch=event;
		if (touch.clientX>168 && touch.clientX<422) {
		label.style.left = touch.clientX-40+"px";
	}
	}
	
	try{
		//阻止页面的滑动默认事件
	document.addEventListener("touchmove",function(){
	event.preventDefault();},false);
}catch(e){
	console.log(e);
	}
}
}

function end(){
	flag=false;
	if (cur.wanchengyidong) {
	var is=confirm("确定选择这一页吗？")
	if (is){
		cur.wanchengyidong=false;

		label.style.display="none";
		book.style.animation=" open_book0 0.4s ease-in 1 forwards";

		li_id.style.animation=" li_1 1s ease-in 1 forwards";
		book1.style.animation=" open_book1 1.2s ease-in 1 forwards";
		book2.style.animation=" open_book2 1.5s ease-in 1 forwards";
		var time1=(cur.x-120)/4
		var t=window.setTimeout(function sleeps(){
	book3.style.animation=" open_book3 0.2s ease "+time1+" forwards";
},1800);
		// book3.style.animation=" open_book3 1.8s ease-in 1 forwards";
		book4.style.animation=" open_book4 "+0.2*time1+"s ease-in 1 forwards";
		book5.style.animation=" open_book5 "+0.3+0.2*time1+"s ease-in 1 forwards";
		book6.style.animation=" open_book6 "+0.6+0.2*time1+"s ease-in 1 forwards";
		var p1=window.setTimeout(textmodify,time1*200)
	}
	}
}
function textmodify(){
	var obj=document.getElementById("book_p")
	obj.innerText="你好啊！"
}
var label = document.getElementById("booklabel");
var li_id = document.getElementById("li_id");
var book = document.getElementById("book");
var book1 = document.getElementById("book1");
var book2 = document.getElementById("book2");
var book3 = document.getElementById("book3");
var book4 = document.getElementById("book4");
var book5 = document.getElementById("book5");
var book6 = document.getElementById("book6");

label.addEventListener("mousedown",function(){down();},false);
label.addEventListener("touchstart",function(){down();},false)
label.addEventListener("mousemove",function(){move();},false);
label.addEventListener("touchmove",function(){move();},false)
document.body.addEventListener("mouseup",function(){end();},false);
label.addEventListener("touchend",function(){end();},false);