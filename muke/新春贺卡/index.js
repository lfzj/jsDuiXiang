/**
 * Created by lfzj on 2017/3/14.
 */
window.onload = function () {
    console.log("网页可见区域宽:"+document.body.clientWidth);
    console.log("网页可见区域高:"+document.body.clientHeight);
    console.log("网页可见区域宽（包括边线的宽）:"+document.body.offsetWidth);
    console.log("网页可见区域高（包括边线的高）::"+document.body.offsetHeight);
    console.log("网页正文全文宽:"+document.body.scrollWidth);
    console.log("网页正文全文高:"+document.body.scrollHeight);
    console.log("网页被卷去的高:"+document.body.scrollTop);
    console.log("网页被卷去的左:"+document.body.scrollLeft);
    console.log("网页正文部分上:"+window.screenTop);
    console.log("网页正文部分左:"+window.screenLeft);
    console.log("屏幕分辨率的高:"+window.screen.height);
    console.log("屏幕分辨率的宽:"+window.screen.width);
    console.log("屏幕可用工作区高度:"+window.screen.availHeight);
    console.log("屏幕可用工作区宽度:"+window.screen.availWidth);

    //获取元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    // 当音乐播放完停止时候，自动停止光盘旋转效果
    // 手机端
    audio.addEventListener("ended",function (event) {
        music.setAttribute("class","");
        // music.style.animationPlayState = "running";
    },false);
    // 点击音乐播放
    music.addEventListener("touchstart", function (event) {
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");  //添加class属性
        } else {
            audio.pause();
            this.setAttribute("class","");
        }
    },false);
    // 点击屏幕，开启好运2016
    page1.addEventListener("touchstart",function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";
        setTimeout(function () {
            page2.setAttribute("class","page fdeDut");
            page3.setAttribute("class","page fadeIn");
        },5500);
    },false);
    // pc端
    // music.onclick = function () {
    //     // 判断音乐是否播放
    //     if(audio.paused){
    //         audio.play();
    //         this.setAttribute("class","play");  //添加class属性
    //         // 这个有兼容问题ios6以上有用，在安卓手机有问题
    //         // this.style.animationPlayState = "running";
    //         // this.style.webkitAnimationPlayState = "running";
    //     } else {
    //         audio.pause();
    //         this.setAttribute("class","");
    //         // this.style.animationPlayState = "paused";
    //         // this.style.webkitAnimationPlayState = "paused";
    //     }
    // };
};
// 8像素切图法