// 顶部动效
//1.鼠标移入移出事件
$(function () {
    //1.1鼠标移入事件
    $('.top-log1').mouseenter(function () {
        $(this).find('#small1').hide().siblings('.big-tu').show();
    });
    //1.2 鼠标移出事件
    $('.top-log1').mouseleave(function () {
        $(this).find('.big-tu').hide().siblings('#small1').show();
    });

//热点推荐
//1.鼠标移入事件
    $('.top-bar .hot').mouseenter(function () {
        $(this).siblings('.hot-xia').stop(true,false).slideDown();
    })
//2.鼠标移出事件
    $('.top-bar .hot').mouseleave(function () {
        $(this).siblings('.hot-xia').stop(true,false).slideUp();
    })

    $('.top-bar .hot-xia').mouseenter(function () {
        $(this).stop(true,false).slideDown();
        $(this).prev('.hot').find('a').css('backgroundColor','#cf1132');
        $(this).prev('.hot').find('a').css('color','white');
    })

    $('.top-bar .hot-xia').mouseleave(function () {
        $(this).stop(true,false).slideUp();
        $(this).prev('.hot').find('a').css('backgroundColor','');
        $(this).prev('.hot').find('a').css('color','');
    })
})