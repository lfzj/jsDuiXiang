	var w = $(document).width();	//��õ�ǰ���ڵĿ��
	var h = $(window).height();	//��õ�ǰ���ڵĸ߶�
	var adw = $("#adpic").width();	//��ù��ͼƬ�Ŀ��
	var adh = $("#adpic").height();	//��ù��ͼƬ�ĸ߶�;
	var adtop = parseInt($("#adpic").css("top"));	//��ù��ͼƬ�Ķ�λֵ
	var adleft = parseInt($("#adpic").css("left"));	//��ù��ͼƬ�Ķ�λֵ
	setInterval("run()",10);
	var sta = 1;
	function run(){
		if(sta==1){
			adtop += 1;
			adleft += 1;
			set();
			sta = (adtop == h-adh)?3:((adleft == w -adw)?2:1);
		}
		if(sta==2){
			adtop += 1;
			adleft -= 1;
			set();
			sta = (adtop == h-adh)?4:((adleft == 0)?1:2);
		}
		if(sta==3){
			adtop -= 1;
			adleft += 1;
			set();
			sta = (adtop == 0)?1:((adleft == w - adw)?4:3);
		}
		if(sta==4){
			adtop -= 1;
			adleft -= 1;
			set();
			sta = (adtop == 0)?2:((adleft == 0)?3:4);
		}
	}
	function set(){		//�������䶯���top��leftֵд�뵽css�С�
		$("#adpic").css({"top":adtop + "px"}).css({"left":adleft  + "px"});
	}