    $(function() {
        //头部导航栏事件
        $('.header .menu li.tag').mouseenter(function() {
            $(this).css('background', 'red');
        })
        $('.header .menu li.tag').mouseleave(function() {
            $(this).css('background', '');
        })
    })

    // 轮播图事件
    $(function() {
        var ul = $('.bgPics') // ul列表
        var box = $('.screen').width() // 轮播图盒子宽度   
        var yeMa = $('.lubo i') //页面数

        // 声明变量,记录当前图片的索引
        var index = 0;
        // 给右箭头点击事件
        $('.arrow-right').click(function() {
            animation();

        })

        function animation() {
            if (index == ul.children().length - 1) {
                ul.css('left', 0);
                index = 0;
            }
            //开始滚动
            index++;
            ul.stop(true, false).animate({
                'left': -index * box

            }, 500)

            // 如果是最后一张,手动修改为第一张

            // 修改轮播圆点
            for (var i = 0; i < yeMa.length; i++) {
                if (i == index) {
                    yeMa[i].className = 'tag';
                } else {
                    yeMa[i].className = '';
                }
            }
            console.log(yeMa[0]);
            // 如果是最后一张,则手动修改第一个圆点高亮
            if (index == ul.children().length - 1) {
                yeMa[0].className = 'tag';

            }

        }

        //左箭头
        $('.arrow-left').click(function() {
            if (index == 0) {
                index = ul.children().length - 1
                ul.css('left', -index * box)
            }
            //开始移动
            index--;
            //console.log(index);
            ul.stop(true, false).animate({
                'left': -index * box

            }, 500)

            for (var j = 0; j < yeMa.length; j++) {
                if (j == index) {
                    yeMa[j].className = 'tag';
                } else {
                    yeMa[j].className = '';
                }

            }

        })

    })




    // 主体模块
    $('.bd>ul>li').click(function() {
        // 鼠标移入这个li标签的索引
        var index = $(this).index();
        // console.log(index);
        $('.allPics>ul').eq(index).show().siblings('ul').hide();
        // console.log($('.allPics>ul').eq(index))

    })