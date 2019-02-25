/**
 * Created by lenovo on 2018-12-08.
 */
//底部轮播图
$(function () {
    var index = 0;
    //下一页
    $('.right_btn').on('click',function () {
        if (index == $('#pic_box').children('li').length-3 ){
            $('#pic_box').css('left',0);
            index = -1;
        };
        index++;


        $('#pic_box').stop(true,false).animate({
            left:-$('#pic_box').children('li').width()*index,
        },1000);
        console.log($('#pic_box').children('li').width() * index);
        console.log(index);
    })

    //上一页
    $('.left_btn').on('click',function () {
        if (index == 0){
            $('#pic_box').css('left',-$('#pic_box').children('li').width()*index);
            index = $('#pic_box').children('li').length-2;
        };
        index--;

        $('#pic_box').stop(true,false).animate({
            left:-$('#pic_box').children('li').width()*index,
        },500);
        console.log($('#pic_box').children('li').width() * index);
        console.log(index);
    })

    
})

$(function () {
    //顶部部轮播图
     var idx = 0;
     var timeID = setInterval(function (  ) {
         if(idx == $('.area_pic').children('li').length-1){
             $('.area_pic').css('left',0);
             idx = 0;
             // $('.dot li').eq(0).css('background','red')
         }
         $('.area_pic').stop(true,false).animate({
             left:-$('.area_pic').children('li').width()*idx,
         },1000);
         $('.dot li').eq(idx).css('background','red').siblings('li').css('backgroundColor','#fff');
         idx++;


     },2000);

    var index;

    $('.dot li').on('click',function () {
        index = $(this).index();
       $(this).css('backgroundColor','red').siblings('li').css('background','#fff');
        $('.area_pic').stop(true,false).animate({
            left:-$('.area_pic').children('li').width()*index,
        },100);
    })
})



