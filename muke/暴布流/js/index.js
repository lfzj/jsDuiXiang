/**
 * Created by lfzj on 2017/6/1.
 */
window.onload = function () {
    waterfall('main','box');
    var dataInt = {"data": [{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"}]};
   window.onscroll = function () {
       if (checkScrollSlide()) {
           var oParent = document.getElementById("main"); // 父级对象
           for(var i=0;i<dataInt.data.length; i++){
               var oBox = document.createElement('div'); //添加 元素节点
               oBox.className = 'box';                   //添加 类名 name属性
               oParent.appendChild(oBox);                //添加 子节点
               var oPic = document.createElement('div');
               oPic.className = 'pic';
               oBox.appendChild(oPic);
               var oImg = document.createElement('img');
               oImg.src = 'images/'+dataInt.data[i].src;
               oPic.appendChild(oImg);
           };
           waterfall('main','box');
       };
   };
}


/*
 parend 父级id
 pin 元素id
 */
function waterfall(parent,box) {
    //  将main下的所有class为box的元素取出来
    var oParent = document.getElementById(parent); // 父级对象
    var oBoxs = getByClass(oParent,box); // 获取存储块框pin的数组aPin
    var oBoxW = oBoxs[0].offsetWidth // 一个块框pin的宽
    //每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    //设置父级居中样式：定宽+自动水平外边距
    oParent.style.cssText = 'width:'+oBoxW*cols+'px;margin:0 auto';
    //用于存储 每列中的所有块框相加的高度。
    var hArr = [];
    //遍历数组aPin的每个块框元素
    for (var i=0; i<oBoxs.length; i++){
        if (i<cols) {
            //第一行中的num个块框pin 先添加进数组pinHArr
            hArr.push(oBoxs[i].offsetHeight);
        }else {
            var hMin = Math.min.apply(null,hArr); //数组pinHArr中的最小值minH
            var index = getminHIndex(hArr,hMin);
            oBoxs[i].style.position = 'absolute';//设置绝对位移
            oBoxs[i].style.top = hMin+'px';
            // oBoxs[i].style.left = index*oBoxW + 'px';
            oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            hArr[index] += oBoxs[i].offsetHeight; //更新添加了块框后的列高
        };
    };
};

/****
 *通过父级和子元素的class类 获取该同类子元素的数组
 */
//根据class获取元素
function getByClass(parent,clsName) {
    var boxArr = new Array(); //创建一个数组 用于收集子元素
    oElements = parent.getElementsByTagName('*'); //获取 父级的所有子集
    for(var i=0; i<oElements.length; i++) {//遍历子元素、判断类别、压入数组
        if (oElements[i].className == clsName) {
            boxArr.push(oElements[i]);
        };
    };
    return boxArr;
}
/****
 *获取 pin高度 最小值的索引index
 */
function getminHIndex(arr,val) {
    for (var i in arr) {
        if (arr[i] == val){
            return i;
        };
    };
};

//检测是否具备了滚动条加载数据块的条件
function checkScrollSlide() {
    var oParent = document.getElementById('main');
    var oBoxs = getByClass(oParent,'box');
    //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop+Math.floor(oBoxs[oBoxs.length - 1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;//注意解决兼容性
    var height = document.body.clientHeight || document.documentElement.clientHeight;//页面高度
    return (lastBoxH < scrollTop+height)? true : false;//到达指定高度后 返回true，触发waterfall()函数
}