var xp_btn=document.getElementsByClassName("new")[0];
var jk_btn=document.getElementsByClassName("hot")[0];
var xp=document.getElementsByClassName("xp")[0];
var jk=document.getElementsByClassName("jk")[0];
var prev=document.getElementsByClassName("prev")[0];
var next=document.getElementsByClassName("next")[0];
var main_ul=document.getElementsByClassName("main_ul")[0];
var options_li=document.getElementsByClassName("options_li");
xp_btn.onmouseover=function(){		
	if(xp_btn.className=="new"){
		addClass(this,"new_selected");
		xp.style.display="block";
		jk.style.display="none";		
		jk_btn.className="hot";
	}
}
jk_btn.onmouseover=function(){
	if(jk_btn.className=="hot"){
		addClass(this,"hot_selected");
		jk.style.display="block";
		xp.style.display="none";		
		xp_btn.className="new";
	}
}
var num=1;
main_ul.style.left="0px";
prev.onclick=function(){
	num=1;
	if(options_li[1].className=="options_li options_li_selected"){
		num=0;		
	}else if(options_li[0].className=="options_li options_li_selected"){
		if(parseInt(main_ul.style.left)!=0){
			num=0;
		}else{
			clearTimeout(movement1);
			return true;
		}		
	}	
	getPrev();
	options_li[num+1].className="options_li";
	options_li[num].className="options_li options_li_selected";
}
next.onclick=function(){
	num=1;
	if(options_li[1].className=="options_li options_li_selected"){
		num=2;
	}else if(options_li[2].className=="options_li options_li_selected"){
		if(parseInt(main_ul.style.left)!=-960){
			num=2;
		}else{
			clearTimeout(movement1);
			return true;
		}	
	}
	getNext();
	options_li[num-1].className="options_li";
	options_li[num].className="options_li options_li_selected";
}
function getPrev(){
	var final_x=-480*num;
	var xpos=parseInt(main_ul.style.left);
	if(xpos==final_x){
		return true;
	}
	if(xpos<final_x){
		xpos=xpos+5;
	}
	main_ul.style.left=xpos+"px";
	movement1=setTimeout("getPrev()",10);
}
function getNext(){
	var final_x=-480*num;
	var xpos=parseInt(main_ul.style.left);
	if(xpos==final_x){
		return true;
	}
	if(xpos>final_x){
		xpos=xpos-5;
	}
	main_ul.style.left=xpos+"px";
	movement2=setTimeout("getNext()",10);
}
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		element.className=element.className.concat(" "+value);
	}
}