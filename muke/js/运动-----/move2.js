/**
 * Created by lfzj on 2017/4/18.
 */
//这个函数是获取行外样式的
function getStyle(obj,attr) {
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    };
};
// 多物体任意运动
function startMove(obj,json,fn) {
    clearInterval(obj.timer);
    var iSpeed=0;
    obj.timer=setInterval(function (){
        var bStop = true;
        for(var attr in json){
            // 取当前的值
            if(attr=='opacity'){
                var iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
            }else {
                var iCur = parseInt(getStyle(obj,attr));
            };

            //算速度值
            iSpeed= (json[attr]-iCur)/8;
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

            //检测停止
            if (iCur!=json[attr]){
                bStop=false;
            };
            if(attr=='opacity'){
                obj.style.filter= 'alpha(opacity:'+(iCur+iSpeed)+')';
                obj.style.opacity=(iCur+iSpeed)/100;
            }else {
                obj.style[attr]=iCur+iSpeed+'px';
            };
        };
        // 在整个循环结束在判断
        if (bStop){
            clearInterval(obj.timer);
            if (fn){
                fn();
            };
        };
    },30);
};