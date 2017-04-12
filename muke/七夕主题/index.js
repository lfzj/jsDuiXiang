/**
 * Created by lfzj on 2017/3/14.
 */
window.onload = function () {
    var container = $("#content");
    // 获取第一个子节点
    var element = container.find(":first");
    // li页面数量
    var slides = element.find("li");
    // 获取容器尺寸
    var width = container.width();
    var height = container.height();
    // 设置li页面总宽度
    element.css({
        width  : (slides.length * width) + 'px',
        height : height + 'px'
    });
    // 设置每一个页面li的宽度
    $.each(slides, function(index) {
        var slide = slides.eq(index); //获取到每一个li元素
        // ？
    });
};