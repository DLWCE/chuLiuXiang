/* 杨晓珍*/

$(function () {

    /*logo
    淡入淡出
    */
    // window.onload=function ( ) { //jQuery不能用window.onload,直接下面设置
    $('.bannerPic_fadein .fadeIn').fadeIn(3000)
    $('.bannerPic_z').fadeIn(3000)


    /*
    优惠广告淡入淡出
    */
    $('.bannerPic-backdrop_t').on('click', function () {
        $('#j_mask').show();
        $('#j_mask').css('z-index', 1);
        $('.erWeima').show();
        $('.erWeima').css('z-index', 2);
        $('.bannerPic_fadein .fadeIn').fadeOut(500)
        $('.bannerPic_z').fadeOut(500)
    });
    $('#close').on('click', function () {
        $('#j_mask').hide();
        $('.erWeima').hide();
        $('.bannerPic_fadein .fadeIn').slideDown(1000)
        $('.bannerPic_z').slideDown(3000)
    });


    /*
    固定导航栏
    */
    var topHeight = $('.top_z').height();
    var menuHeight = $('.menu_z').height();
    var roofHeight = $('.roof_bj1_z').height();
    var sumHeight = topHeight + menuHeight;
    $(window).on('scroll', function () {
        var scrollTop1 = $(this).scrollTop();
        if (scrollTop1 >= sumHeight) {
            $('.roof_bj1_z').css({
                position: 'fixed',
                left: 53,
                top: 0
            });
            $('.bannerPic_fadein').css({
                'marginTop': roofHeight
            })
        } else {
            $('.roof_bj1_z').css({
                position: 'static',
            });
            $('.bannerPic_fadein').css({
                'marginTop': 0
            });
        }
    });

/*
* *定时器
* */

 var timeID = null;
    timeID = setInterval(function () {
        //2.1 获取当前元素的时分秒

        var spanDay = document.getElementById('spanDay');
        var spanHour = document.getElementById('spanHour');
        var spanMin = document.getElementById('spanMin');
        var spanSec = document.getElementById('spanSec');
        var spanAbbr = document.getElementById('spanAbbr');

        var d = spanDay.innerText;
        var h = spanHour.innerText;
        var m = spanMin.innerText;
        var s = spanSec.innerText;
        var a = spanAbbr.innerText;
        //2.2 s--
        a--;//自减运算符可以隐式类型转换

        if (a < 0) {
            a = 4;
            s--;
        }

        if (s < 0) {
            s = 58;
            m--;
        }

        if (m < 0) {
            m = 14;
            h--;
        }

        d = parseInt(d);
        h = parseInt(h);
        m = parseInt(m);
        s = parseInt(s);
        a = parseInt(a);

        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        a = a < 10 ? '0' + a : a;

        spanDay.innerText = d;
        spanHour.innerText = h;
        spanMin.innerText = m;
        spanSec.innerText = s;
        spanAbbr.innerText = a;
    }, 1000)


});

/*
商品展示2
*/

$('.trade1_list_left1-li').on('mouseenter', function () {

    var idx = $(this).index();
    $('.trade1_list_right').eq(idx).show().siblings('li').hide();
    $('.right_img_s').eq(idx).show().siblings('li').hide();
    console.log(this);
});
