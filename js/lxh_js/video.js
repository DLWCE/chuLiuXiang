/**
 * Created by 谢小豪 on 2018/12/6.
 */
$(function () {
    //获取视频
    var video = document.querySelector("video");
    videoPlay();
    videoRenew();
    videoSound();
    videoScroll();
    videoExted();


    var tmDate = [
        {
            'text':"我草,牛逼啊"
        },
        {
            'text':"赢了666"
        },
        {
            'text':"参团啊兄弟"
        },
        {
            'text':"我草,牛逼啊"
        },
        {
            'text':"能不能再浪一点"
        },
        {
            'text':"爱你么么哒"
        }
    ]

    /**
     * 弹幕
     */
    // $('.barrage').click(function () {
    //
    //     var tmList = [];
    //     console.log(tmDate.length);
    //         for (var i = 0; i < tmDate.length; i++) {
    //             for(var key in tmDate[i]){
    //                 tmList.push('<marquee><span top='+Math.floor( Math.random()*12 )*2+"px"+'>'   +tmDate[i]['text']+'</span></marquee>');
    //                 console.log(tmDate[i]['text']);
    //             }
    //         }
    //     console.log(tmList);
    //     //
    //     // // var $link = $('<marquee direction="left"><span>left</span></marquee>');
    //     //
    //     // console.log(Math.random()*12 )*30;
    //     // $('marquee span').css('top',Math.floor( Math.random()*12 )*30);
    //     // //把这个新创建的a标签,追加到div1中去.
    //     var $tr = $(tmList.join(""));
    //     console.log($tr);
    //     $('.video .direction').append($tr); //在原生js中使用appendChild追加,在jQuery中使用append方法追加.
    // })


    /**
     * 视频播放/暂停
     */
    function videoPlay() {
        $('.switch').click(function() {
            if ($(this).hasClass('pause')) {
                video.play();
                $(this).removeClass('pause icon-icon--').addClass('play icon-iconstop');
            } else {
                video.pause();
                $(this).removeClass('play icon-iconstop').addClass('pause icon-icon--');
            };
        });
    }

    /**
     * 重新播放
     */
    function videoRenew() {
        $('.renew').click(function() {
            var totalTime = 0;
            if(video.currentTime = totalTime){
                video.play();
            }
        });
    };
    
    /**
     * 设置静音/不静音
     */
    function videoSound() {
        $('.sound').click(function() {
            var sta = video.muted;
            if (sta == true) {
                //非静音
                $(this).addClass('icon-mn_shengyin_fill').removeClass('icon-mn_shengyinwu_fill');
                video.muted = false;
            } else {
                //静音
                $(this).removeClass('icon-mn_shengyin_fill').addClass('icon-mn_shengyinwu_fill');
                video.muted = true;
            };
        });
    };

    /**
     * 视频滚动条
     */
    function videoScroll() {
        var tTime,cTime;
        video.oncanplay = function () {
            //显示总时长
            tTime = video.duration;
            console.log(tTime);
        };
        video.ontimeupdate = function () {
            //实时记录播放时间
            cTime = video.currentTime;
            console.log(cTime);
            $('.cur-progress').css('width',cTime / tTime * 100 + "%");
            //获取滚动条 == 0 白点显示影藏
            var $progressW =  $('.cur-progress').width()
            $progressW == 0 ? $('.cur-progress i').hide() :  $('.cur-progress i').show();
            //判断视频是不是最后,是则修改样式
            cTime == tTime ?  $('.switch').addClass('pause icon-icon--').removeClass('play icon-iconstop') : false;
        };
    };

    /**
     * 视频全屏
     */
    function videoExted() {
        $('.exted').click(function () {
            //全屏的H5写法
            video.webkitRequestFullScreen();
        });
    };
});