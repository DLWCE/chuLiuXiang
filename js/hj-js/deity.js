// 轮播图
//0.将每一个元素样式放入数组中
var config = [
    {
        'width':150,
        'top': 100,
        'left': 50,
        'opacity': 0.2,
        'z-index': 2
    },//0
    {
        'width': 240,
        'top': 70,
        'left': 150,
        'opacity': 0.6,
        'z-index': 3
    },//1
    {
        'width': 400,
        'top': 10,
        'left': 400,
        'opacity': 1,
        'z-index': 4
    },//2
    {
        'width': 240,
        'top': 70,
        'left': 800,
        'opacity': 0.6,
        'z-index': 3
    },//3
    {
        'width':150,
        'top': 100,
        'left': 990,
        'opacity': 0.2,
        'z-index': 2
    }//4
];

//1.获取元素
var slide = document.getElementById('slide');//旋转木马图显示盒子
var ul1 = document.getElementById('ul1');//旋转木马列表
var arrLeft =document.getElementsByClassName('slide-left')[0];//上一页
var arrRight = document.getElementsByClassName('slide-right')[0];//下一页

//2.3 下一个
    arrRight.onclick = function (  ) {
    //3事件处理
    //3.1 让config数组最后一个元素移动到最前面
    config.unshift(config.pop());
    //3.2 开始移动
    for(var i = 0;i<ul1.children.length;i++){
        animationSlow(ul1.children[i],config[i]);
    }
};

//2.4 上一页
arrLeft.onclick = function (  ) {
    //3.事件处理

    //3.1 让config数组第一个元素移动到最后面
    config.push(config.shift());
    //3.2 开始移动
    for(var i = 0;i<ul1.children.length;i++){
        animationSlow(ul1.children[i],config[i]);
    }
};


//二维码鼠标移入事件
$(function () {
   $('#one').mouseenter(function () {
       $('.qr-code').show();
   });
    $('#one').mouseleave(function () {
       $('.qr-code').hide()
   });
});

$(function () {
    $('#two img').mouseenter(function () {
        $('#two').css('opacity',0.7)
    });
    $('#two img').mouseleave(function () {
        $('#two').css('opacity',1)
    });
});

$(function () {
    $('#three img').mouseenter(function () {
        $('#three').css('opacity',0.7)
    });
    $('#three img').mouseleave(function () {
        $('#three').css('opacity',1)
    });
});