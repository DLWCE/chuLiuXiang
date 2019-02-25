/**
 * Created by Administrator on 2018/12/7.
 */

//点击订单第一个和第三个隐藏      第二个显示
$(function(){
     $('.ty-dierye').on('click',function(){
         $('.ty-di-yi-ge').hide();
         $('.ty-dier').show();
         $('.ty-wd').hide();

     })

    //点击第二页跳转 返回第一页  第二页第三页隐藏  第一页显示
    $('#ty-tiaozhuan').on('click',function(){
        $('.ty-dier').hide();
        $('.ty-wd').hide();
        $('.ty-di-yi-ge').show();
    })

   //鼠标移入显示验证图片
    $('.ty-limian').mouseenter(function(){
         $('.ty-yzt').show();
    })

    //鼠标移出隐藏图片
    $('.ty-limian').mouseleave(function(){
        $('.ty-yzt').hide();
    })


    //点击第三页信丰  显示第二页   隐藏第三页和第一页
    $('.ty-cbge #ty-syydd').on('click',function(){
        $('.ty-wd').hide();//隐藏三
        $('.ty-dier').show();//显示二
        $('.ty-di-yi-ge').hide();//隐藏一
    })

    //点击最下面我的  显示第三页  隐藏第一第二
    $('.ty-wds').on('click',function(){
        $('.ty-di-yi-ge').hide();//隐藏一
        $('.ty-wd').show();//显示三
        $('.ty-dier').hide();//隐藏二
    })


})