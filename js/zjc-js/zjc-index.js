/**
 * Created by zhujiancheng on 2018/12/7.
 */
//����ͨ��������չ
$(function () {
    $('#kehufuwu').mouseenter(function () {
        $(this).find('ul').show();
        $(this).children('.fuwu').children('.up').hide();
        $(this).children('.fuwu').children('.down').show();
    })

    $('#kehufuwu').mouseleave(function () {
        $(this).find('ul').hide();
        $(this).children('.fuwu').children('.up').show();
        $(this).children('.fuwu').children('.down').hide();
    })
})



//app��ά��
$(function () {
    $('#zjc-top_nav .app').mouseenter(function () {
        $(this).children('.erweima').show();
    })

    $('#zjc-top_nav .app').mouseleave(function () {
        $(this).children('.erweima').hide();
    })
})

//�Ӽҵ���ʾ������
$(function () {
    $('.zjc-menu-nav>ul>li').on('mouseenter',function () {
        $(this).children('ul').stop(true,false).slideDown(100);
        $(this).children('a').css({
            'color':'#ceac78',
            'border-bottom':'2px solid #ceac78'
        })
    })
    $('.zjc-menu-nav>ul>li').on('mouseleave',function () {
        $(this).children('ul').stop(true,false).slideUp(100);
        $(this).children('a').css({
            'color':'',
            'border-bottom':''
        })
    })

});


//ͷ���̶�
$(function () {
    var $headertop = $('.header').height();

    $(window).on('scroll', function () {
        var topvalue = $(this).scrollTop();
        if (topvalue >= $headertop){
            $('.zjc-menu-nav>ul').css({
                position:'fixed',
                background:"white",
                left:0,
                top:0,
                width:1366,
                height:35,
                zIndex:10,
                paddingTop:20,
                paddingLeft:80
            });
            $('.banner').css({
                marginTop:30
            })
        }else {
            $('.zjc-menu-nav>ul').css({
                position:'static',
                left:0,
                top:0,
                width:1366,
                height:35,
                paddingTop:0,
                paddingLeft:0
            });
            $('.banner').css({
                marginTop:0
            })
        }
    })
})

//��ѡ�̶����Ķ�̬
$(function () {

    $(window).on('scroll', function () {
        var isAll = $(this).scrollTop();
        if(isAll >= 550){
            $('.guding').css({
                display:'block'
                })
        }else {
            $('.guding').css({
                display:'none'
            })
        }
    })
})

//��ѡ�̶�����ê��
$(function () {

    $(window).on('scroll', function () {
        var IsAll = $(this).scrollTop();
        if(IsAll >= 3000){
            $('#wanjia').css({
                backgroundColor:'#eb9367'
            })
            $('#fanpai').css({
                backgroundColor:'white'
            });
            $('#xianshi').css({
                backgroundColor:'white'
            });
        }else if(IsAll >= 1550){
            $('#xianshi').css({
                backgroundColor:'#eb9367'
            });
            $('#fanpai').css({
                backgroundColor:'white'
            });
            $('#wanjia').css({
                backgroundColor:'white'
            })
        }else if(IsAll >= 550){
            $('#fanpai').css({
                backgroundColor:'#eb9367'
            })
            $('#xianshi').css({
                backgroundColor:'white'
            });
            $('#wanjia').css({
                backgroundColor:'white'
            })
        }
    })

})