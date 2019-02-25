/**
 * Created by 谢小豪 on 2018/12/5.
 */
$(function () {
    //点击端游
    $('.dy').click(function () {
        $('.dy_content').show();
        $('.sy_content').hide();
        $(this).addClass('game_default');
        $('.sy').removeClass('game_default');
    });
    //点击手游
    $('.sy').click(function () {
        $('.dy_content').hide();
        $('.sy_content').show();
        $(this).addClass('game_default');
        $('.dy').removeClass('game_default');
        showMore();
    });
    //点击手游更多现实全部
    function showMore() {
        var slideHeight = 569; // px
        var defHeight = $('#wrap').height();
        if (defHeight >= slideHeight) {
            $('#wrap').css('height', slideHeight + 'px');
            $('#read-more').append('<a href="#">更    多</a>');
            $('#read-more a').click(function () {
                var curHeight = $('#wrap').height();
                if (curHeight == slideHeight) {
                    $('#wrap').animate({
                        height: defHeight
                    }, "normal");
                    $('#read-more a').html('收    起');
                    $('#gradient').fadeOut();
                } else {
                    $('#wrap').animate({
                        height: slideHeight
                    }, "normal");
                    $('#read-more a').html('更    多');
                    $('#gradient').fadeIn();
                }
                return false;
            });
        }
    }

    /**
     * 设置banner图片的浮动位移效果
     * 主要控制
     * left : (document.body.clientWidth* 1 / 4 - e.pageX * 1 / 50) + 'px ' ,   1/4 这个值
     * top  : (200*1/3-e.pageY * 1 / 35) + 'px'                                 200 这个值
     */
    $('.banner_w').mousemove(function (e) {
        var banner_w = document.getElementsByClassName('banner_w')[0];
        $('.banner_w .text').css(
            {
                'left': (banner_w.clientWidth* 1 / 200 - e.pageX * 1 / 100) + 'px ' ,
                'top': (320*1/3-e.pageY * 1 / 35) + 'px'
            }
        );
        $('.banner_w .banner_people').css(
            {
                'left': (banner_w.clientWidth* 1 / 1.88 - e.pageX * 1 / 100) + 'px ' ,
                'top': (223*1/3-e.pageY * 1 / 35) + 'px'
            }
        );
        $('.banner_w .cloud').css(
            {
                'left': (banner_w.clientWidth* 1 / -2.2 - e.pageX * 1 / 100) + 'px ' ,
                'top': (30*1/3-e.pageY * 1 / 35) + 'px'
            }
        );
        $('.banner_w .house').css(
            {
                'left': (banner_w.clientWidth* 1 / 3.2 - e.pageX * 1 / 100) + 'px ' ,
                'top': (200*1/3-e.pageY * 1 / 35) + 'px'
            }
        );
    });

});


$(function () {

});
