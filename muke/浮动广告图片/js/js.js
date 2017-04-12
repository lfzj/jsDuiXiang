	var w = $(document).width();	//获得当前窗口的宽度
	var h = $(window).height();	//获得当前窗口的高度
	var adw = $("#adpic").width();	//获得广告图片的宽度
	var adh = $("#adpic").height();	//获得广告图片的高度;
	var adtop = parseInt($("#adpic").css("top"));	//获得广告图片的定位值
	var adleft = parseInt($("#adpic").css("left"));	//获得广告图片的定位值
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
	function set(){		//用来将变动后的top和left值写入到css中。
		$("#adpic").css({"top":adtop + "px"}).css({"left":adleft  + "px"});
	}