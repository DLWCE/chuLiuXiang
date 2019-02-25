
$(function(){
    //滑块变蓝
   $('.hxw-container-nav a').on('mouseenter',function(){
       $(this).addClass('hxw-active');
   });
    $('.hxw-container-nav a').on('mouseleave',function(){
        $(this).removeClass('hxw-active');
    });
    //特效以及彩蛋
    $('.hxw-topleft >.hxw-blue>a').on('click',function(){
        var str = $(this)[0].innerText;
        if( str == "一起摇摆"){
            $(this).text("燃放烟花");
            $('.yanhua img').css('display','none');
            $('.caidan').css('display','block');
        }else if($(this).text() =="燃放烟花"){
            $(this).text("一起摇摆");
            $('.yanhua img').css('display','block');
            $('.caidan').css('display','none');
            $('#music')[0].src = '#';
    }
    });
    //$('.hxw-topleft >.hxw-blue').on('click',function(){
    //    if( $(this).find('a').text() == "一起摇摆"){
    //        $('#music')[0].src = "music/bgm.mp3";
    //    }
    //    if( $(this).find('a').text() == "燃放烟花"){
    //        $('#music')[0].src = "#";
    //    }
    //})



    //呼吸轮播图
    var idx=0;
    $('.hxw-point>a').on('click',function(){
        $(this).addClass('hxw-blue').siblings('a').removeClass('hxw-blue');
        idx = $(this).index();
        $('.hxw-bannerImg>li').eq(idx).stop(true,false).fadeIn(1000).siblings('li').stop(true,false).fadeOut(1000);
    });
    setInterval(function(){
        idx++;
        if (idx==5){
            idx =0;
        }
        $('.hxw-bannerImg>li').eq(idx).fadeIn(1000).siblings('li').fadeOut(1000);
        $('.hxw-point>a').eq(idx).addClass('hxw-blue').siblings('a').removeClass('hxw-blue');
    },3000);

    //左边视频栏边框变蓝
    var i=0;
    $('.dongtai a').on('click',function() {
        i++;
        $(this).addClass('active');
        $(this).parent().siblings().children('a').removeClass('active');
        var indexUL = $(this).parent().index();
        switch (indexUL ){
            case 1:$($('.dongtai ul')[1]).stop(true,false).fadeIn(500);
                   $($('.dongtai ul')[2]).stop(true,false).fadeOut(500);
                   $($('.dongtai ul')[3]).stop(true,false).fadeOut(500);
                break;

            case 2:$($('.dongtai ul')[2]).stop(true,false).fadeIn(500);
                   $($('.dongtai ul')[1]).stop(true,false).fadeOut(500);
                   $($('.dongtai ul')[3]).stop(true,false).fadeOut(500);
                break;

            case 3: $($('.dongtai ul')[3]).stop(true,false).fadeIn(500);
                break;
            case 4:
                console.log(i);
                if(i%2==0){
                        $($('.dongtai ul')[1]).stop(true,false).fadeIn(500);
                        $($('.dongtai ul')[2]).stop(true,false).fadeOut(500);
                        $($('.dongtai ul')[3]).stop(true,false).fadeOut(500);

                    } else {
                        $($('.dongtai ul')[2]).stop(true,false).fadeIn(500);
                        $($('.dongtai ul')[1]).stop(true,false).fadeOut(500);
                        $($('.dongtai ul')[3]).stop(true,false).fadeOut(500);
                   }
                break;
            }




        //if(indexUL==2){
        //    $($('.dongtai ul')[2]).stop(true,false).fadeIn(500);
        //    $($('.dongtai ul')[1]).stop(true,false).fadeOut(500);
        //}
        //if(indexUL==2){
        //    $($('.dongtai ul')[2]).stop(true,false).fadeIn(500);
        //    $($('.dongtai ul')[1]).stop(true,false).fadeOut(500);
        //}


        //$(this).parent().parent().
    });





    //播放器移入动画
    $('.taiji').on('mouseenter',function(){
        $(this).css({
            transform: 'scale(0.2)'+' rotate(-180deg)',
            transition: '2s'
        })
    })
    $('.taiji').on('mouseleave',function(){
        $(this).css({
            transform: 'scale(1)',
            transition: '2s'
        })
    })
    $('.dtlistimg').on('mouseenter',function(){
        $(this).find('.mask').css('display','block').parent().parent().siblings('li').eq('.mask').css('display','none');
        console.log($(this).find('img'));
        $(this).find('img').css({
            transform: 'scale(1.1)',
            transition: '1s'
        })
    });

    $('.dtlistimg').on('mouseleave',function(){
        $(this).find('.mask').css('display','none');
        $(this).find('img').css({
            transform: 'scale(1)',
            transition: '1s'
        })
    })



    //电视机轮播图
    var TVindex = 0;
    $('.onlinebannerpoint>a').on('click',function(){
        $(this).addClass('hxw-blue').siblings('a').removeClass('hxw-blue');
        TVindex = $(this).index();
        $('.onlinebannerimg>li').eq(TVindex).stop(true,false).fadeIn(1000).siblings('li').stop(true,false).fadeOut(1000);
        $('.onlinetext>li').eq(TVindex).stop(true,false).fadeIn(1000).siblings('li').stop(true,false).fadeOut(1000);
    });
    setInterval(function(){
        TVindex++;
        if (TVindex==3){
            TVindex =0;
        }
        $('.onlinebannerimg>li').eq(TVindex).fadeIn(1000).siblings('li').fadeOut(1000);
        $('.onlinebannerpoint>a').eq(TVindex).addClass('hxw-blue').siblings('a').removeClass('hxw-blue');
        $('.onlinetext>li').eq(TVindex).fadeIn(1000).siblings('li').fadeOut(1000);
    },3000);

});