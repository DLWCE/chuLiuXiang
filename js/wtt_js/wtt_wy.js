//轮播图1
//获取元素
$(function () {
    var next = $('.page1 .show1 i');//下一页按钮
    var ul = $('.page1 .show-tu ul');//ul列表
    var box = $('.show-tu').width();//轮播图盒子宽度
    var suoYin = $('.page1 .show1 .list')//页码数

    
    //声明一个变量来存储图片的下标
    var index = 0;

    //开启自动轮播模式
    var timeID = setInterval(function (  ) {
        aa();
    },2000);

    //鼠标移入清除定时器
    ul.mouseenter(function () {
        clearInterval(timeID);
    });

    next.mouseenter(function () {
        clearInterval(timeID);
    });

    //鼠标移出开启定时器
    ul.mouseleave(function () {
    timeID = setInterval(function () {
            aa();
        }, 2000);
    });

    next.mouseleave(function () {
    timeID = setInterval(function () {
            aa();
        }, 2000);
    });

    //给下一页注册点击事件
    next.click(function () {
        aa();
    })

    function aa (){
         //如果是最后一张,手动修改为第一张
        if (index == ul.children().length -1) {
            ul.css('left',0);
            index = 0;
        }
        //开始滚动
        index++;
        ul.stop(true,false).animate({
          left: -index*box,
        },500)
        //修改页码
        suoYin.text('0' + (index+1) + "/" + "04");
        //如果是最后一张,手动修改为第一页
        if (index == ul.children().length -1) {
            suoYin.text('01/04');
        }
    }
})


//轮播图2
$(function () {
    var next = $('.page2 .show1 i');//下一页按钮
    var ul = $('.page2 .show-tu ul');//ul列表
    var box = $('.show-tu').width();//轮播图盒子宽度
    var suoYin = $('.page2 .show1 .list')//页码数

    
    //声明一个变量来存储图片的下标
    var index = 0;

    //开启自动轮播模式
    var timeID = setInterval(function (  ) {
        aa();
    },2000);

    //鼠标移入清除定时器
    ul.mouseenter(function () {
        clearInterval(timeID);
    });

    next.mouseenter(function () {
        clearInterval(timeID);
    });

    //鼠标移出开启定时器
    ul.mouseleave(function () {
    timeID = setInterval(function () {
            aa();
        }, 2000);
    });

    next.mouseleave(function () {
    timeID = setInterval(function () {
            aa();
        }, 2000);
    });

    //给下一页注册点击事件
    next.click(function () {
        aa();
    })

    function aa (){
         //如果是最后一张,手动修改为第一张
        if (index == ul.children().length -1) {
            ul.css('left',0);
            index = 0;
        }
        //开始滚动
        index++;
        ul.stop(true,false).animate({
          left: -index*box,
        },500)
        //修改页码
        suoYin.text('0' + (index+1) + "/" + "04");
        //如果是最后一张,手动修改为第一页
        if (index == ul.children().length -1) {
            suoYin.text('01/04');
        }
    }
})


//轮播图3
$(function () {
    var next = $('.page6 .show1 i');//下一页按钮
    var ul = $('.page6 .show-tu ul');//ul列表
    var box = $('.show-tu').width();//轮播图盒子宽度
    var suoYin = $('.page6 .show1 .list')//页码数

    
    //声明一个变量来存储图片的下标
    var index = 0;

    //开启自动轮播模式
    var timeID = setInterval(function (  ) {
        aa();
    },2000);

    //鼠标移入清除定时器
    ul.mouseenter(function () {
        clearInterval(timeID);
    });

    next.mouseenter(function () {
        clearInterval(timeID);
    });

    //鼠标移出开启定时器
    ul.mouseleave(function () {
    timeID = setInterval(function () {
            aa();
        }, 2000);
    });

    next.mouseleave(function () {
    timeID = setInterval(function () {
            aa();
        }, 2000);
    });

    //给下一页注册点击事件
    next.click(function () {
        aa();
    })

    function aa (){
         //如果是最后一张,手动修改为第一张
        if (index == ul.children().length -1) {
            ul.css('left',0);
            index = 0;
        }
        //开始滚动
        index++;
        ul.stop(true,false).animate({
          left: -index*box,
        },500)
        //修改页码
        suoYin.text('0' + (index+1) + "/" + "04");
        //如果是最后一张,手动修改为第一页
        if (index == ul.children().length -1) {
            suoYin.text('01/03');
        }
    }
})





//淡入
$(function () {
    $('.cover .slogan').fadeIn(3000);
    $('.cover .logo').animate({
        top: 43,
    },2000);

    $('.erWeiMa .ios').mouseenter(function () {
        $(this).animate({
            opacity: 1
        })
    })

    $('.erWeiMa .ios').mouseleave(function () {
        $(this).animate({
            opacity: 0.5
        })
    })

    $('.erWeiMa .anzhuo').mouseenter(function () {
        $(this).animate({
            opacity: 1
        })
    })

    $('.erWeiMa .ios').mouseleave(function () {
        $(this).animate({
            opacity: 0.5
        })
    })

    $('.erWeiMa .downLoad').mouseenter(function () {
        $(this).animate({
            opacity: 1
        })
    })

    $('.erWeiMa .downLoad').mouseleave(function () {
        $(this).animate({
            opacity: 0.8
        })
    })

})