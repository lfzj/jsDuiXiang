//���涼�Ƕ����ȫ����Դ
var con = document.getElementById("con");
var ii = 0;		//��ĸ�����ļ�����
var color = new Array('#fff','#0f3','#3ff','#ff0','#f00');
var letterArr = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');		//������ĸ����
var mark = 0;	//�÷�
var losemark = 0;	//ʧ��
var jiluSta = 2;	//��¼��״̬
var run = '';		//���嶨ʱ��
//���涼�Ƕ����ȫ����Դ
function reSize(){		//��con�Զ���Ӧ���������
	con.style.height = document.documentElement.clientHeight*0.8 +"px";
}
reSize();
function begin(){		//�����ʼ��Ϸ��ť����õĺ���
	if(run){
		clearInterval(run);
	}
	run = setInterval("down()",100);
}
function down(){		//������ĸЧ���ĺ���
	if(losemark - mark == 20){
		clearInterval(run);
		alert("���ź�����Ϸ�����ˣ�");
	}
	if(ii<5){
		var p = document.createElement("p");		//����p��ǩ
		p.setAttribute("style","position:absolute;top:0px;left:"+Math.floor(Math.random()*con.offsetWidth)*0.9+"px;font-size:"+Math.floor(Math.random()*25+18)+"px;color:"+color[Math.floor(Math.random()*5)]);	//��p��ǩ������ʽ
		p.innerHTML = letterArr[Math.floor(Math.random()*26)];		//��p��ǩ�в�����ĸ
		con.appendChild(p);		//��p��ǩ����con��
		ii++;
	}
	conChild = con.childNodes;
	for(i=0;i<conChild.length;i++){	
		conChild[i].style.top = parseInt(conChild[i].style.top) + 5 + "px";		//�ı�pԪ��ͶƱֵ
		if(parseInt(conChild[i].style.top)>=con.offsetHeight){		//�ж���ĸ�Ƿ��Ѿ��䵽�ײ�
			con.removeChild(conChild[i]);	//�䵽�ײ��Ļ������������ĸ
			ii--;
			losemark++;
		}
	}
	document.getElementById("mark").innerHTML = mark;
	document.getElementById("losemark").innerHTML = losemark;
	document.getElementById("per").innerHTML = (mark == 0 && losemark == 0)?"0%":(Math.round(mark/(mark+losemark)*100)) + "%";
}
document.documentElement.onkeydown = function(event){
	for(j=0;j<conChild.length;j++){		//���������жϲ����������������ƥ�����ĸ��
		if(String.fromCharCode(event.keyCode) == conChild[j].innerHTML){
			con.removeChild(conChild[j]);
			ii--;
			mark++;
			jiluSta = 1;		//������������ĸƥ�䵽�����µ���ĸ����ô��״̬���1
		}
	}
	if(jiluSta ==1 ){		
		document.getElementById("jilu").innerHTML += String.fromCharCode(event.keyCode);		//���ղ��������ĸ��ӵ���¼����
		jiluSta = 2;		//��״̬�ָ���2
	}else{
		document.getElementById("jilu").innerHTML += "<span>"+String.fromCharCode(event.keyCode)+"</span>";
		losemark++;
	}
}

function stop(){		//��ͣ��ť�󶨵��¼�
	clearInterval(run);
}

function replay(){		//���水ť�󶨵��¼�
	location.reload(true);		//���ص�ǰҳ��
}