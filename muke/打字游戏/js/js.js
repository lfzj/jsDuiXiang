//下面都是定义的全局资源
var con = document.getElementById("con");
var ii = 0;		//字母数量的计数器
var color = new Array('#fff','#0f3','#3ff','#ff0','#f00');
var letterArr = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');		//定义字母数组
var mark = 0;	//得分
var losemark = 0;	//失分
var jiluSta = 2;	//记录的状态
var run = '';		//定义定时器
//上面都是定义的全局资源
function reSize(){		//让con自动适应浏览器窗口
	con.style.height = document.documentElement.clientHeight*0.8 +"px";
}
reSize();
function begin(){		//点击开始游戏按钮后调用的函数
	if(run){
		clearInterval(run);
	}
	run = setInterval("down()",100);
}
function down(){		//控制字母效果的函数
	if(losemark - mark == 20){
		clearInterval(run);
		alert("很遗憾！游戏结束了！");
	}
	if(ii<5){
		var p = document.createElement("p");		//创建p标签
		p.setAttribute("style","position:absolute;top:0px;left:"+Math.floor(Math.random()*con.offsetWidth)*0.9+"px;font-size:"+Math.floor(Math.random()*25+18)+"px;color:"+color[Math.floor(Math.random()*5)]);	//给p标签定义样式
		p.innerHTML = letterArr[Math.floor(Math.random()*26)];		//在p标签中插入字母
		con.appendChild(p);		//将p标签插入con中
		ii++;
	}
	conChild = con.childNodes;
	for(i=0;i<conChild.length;i++){	
		conChild[i].style.top = parseInt(conChild[i].style.top) + 5 + "px";		//改变p元素投票值
		if(parseInt(conChild[i].style.top)>=con.offsetHeight){		//判断字母是否已经落到底部
			con.removeChild(conChild[i]);	//落到底部的话就消灭这个字母
			ii--;
			losemark++;
		}
	}
	document.getElementById("mark").innerHTML = mark;
	document.getElementById("losemark").innerHTML = losemark;
	document.getElementById("per").innerHTML = (mark == 0 && losemark == 0)?"0%":(Math.round(mark/(mark+losemark)*100)) + "%";
}
document.documentElement.onkeydown = function(event){
	for(j=0;j<conChild.length;j++){		//这里是来判断并消灭与键盘输入相匹配的字母的
		if(String.fromCharCode(event.keyCode) == conChild[j].innerHTML){
			con.removeChild(conChild[j]);
			ii--;
			mark++;
			jiluSta = 1;		//如果打进来的字母匹配到了落下的字母，那么把状态变成1
		}
	}
	if(jiluSta ==1 ){		
		document.getElementById("jilu").innerHTML += String.fromCharCode(event.keyCode);		//将刚才输入的字母添加到记录当中
		jiluSta = 2;		//把状态恢复到2
	}else{
		document.getElementById("jilu").innerHTML += "<span>"+String.fromCharCode(event.keyCode)+"</span>";
		losemark++;
	}
}

function stop(){		//暂停按钮绑定的事件
	clearInterval(run);
}

function replay(){		//重玩按钮绑定的事件
	location.reload(true);		//重载当前页面
}