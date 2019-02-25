//官网js效果
$(function () {
    //游戏助手
    $lhrYxzs = $(".lhr-page1 .sloganbox .btnyxzs");
    $lhrYxzsBox = $(".lhr-page1 .sloganbox .yxzsqrbox");
    $lhrYxzs.mouseenter(function () {
        $lhrYxzsBox.show();
    });
    $lhrYxzs.mouseleave(function () {
        $lhrYxzsBox.hide();
    });

    // 跳转到对应位置
    $lhrP1TiaoZ = $(".lhr-page1 .navTopbox li");
    // 新闻资讯
    $($lhrP1TiaoZ[1]).click(function () {
        window.scrollTo(0, 600);
    });
    // 门派介绍
    $($lhrP1TiaoZ[2]).click(function () {
        window.scrollTo(0, 1200);
    });
    // 游戏特色
    $($lhrP1TiaoZ[3]).click(function () {
        window.scrollTo(0, 2200);
    });
    // 视频中心
    $($lhrP1TiaoZ[4]).click(function () {
        window.scrollTo(0, 2900);
    });

    //page2新闻
    $lhrP2NewsHead = $(".lhr-page2 .news-con .news-box .head li");
    $lhrP2NewsBox = $(".lhr-page2 .news-con .news-box .bd ul")
    for (var i = 0; i < $lhrP2NewsHead.length; i++) {
        $($lhrP2NewsHead[i]).mouseenter(function () {
            $(this).css({
                "border-bottom":"solid red 2px",
                fontWeight : "bold"
            }).siblings("li").css({
                "border-bottom" : "solid red 0px",
                fontWeight : "normal"
            });
            var index = $(this).index();
            $($lhrP2NewsBox[index]).show(200).siblings("ul").hide();
        });

    }

    $lhrP2Color = $(".lhr-page2 .news-con .news-box .bd li");
    $lhrP2Color.mouseenter(function () {
        $(this).find(".news_in").css({color: "black"});
    });
    $lhrP2Color.mouseleave(function () {
        $(this).find(".news_in").css({color: "#666666"});
    });

    // page2轮播图
    var lhrP2Index = 0;
    $lhrP2Img = $(".lhr-page2 .news-con .banner .bd");
    $lhrP2Dot = $(".lhr-page2 .news-con .banner .dot i");
    var lhrP2TimeID = null;
    $($lhrP2Dot[0]).addClass("on");
    lhrP2TimeID = setInterval(function () {
        lhrP2Index++;
        if (lhrP2Index == 8 ){
            lhrP2Index = 0;
        }
        $($lhrP2Dot[lhrP2Index]).addClass("on").siblings("i").removeClass("on");
        $lhrP2Img.animate({
            left: -731 * lhrP2Index
        });
    }, 2000);
    $lhrP2Box = $(".lhr-page2 .news-con .banner");

    $lhrP2Box.mouseenter(function () {
        clearInterval(lhrP2TimeID);
    });

    $lhrP2Box.mouseleave(function () {
        lhrP2TimeID = setInterval(function () {
            lhrP2Index++;
            if (lhrP2Index == 8 ){
                lhrP2Index = 0;
            }
            $($lhrP2Dot[lhrP2Index]).addClass("on").siblings("i").removeClass("on");
            $lhrP2Img.animate({
                left: -731 * lhrP2Index
            });
        }, 2000);
    });

    // 轮播图圆点
    for (var i = 0; i < $lhrP2Dot.length; i++) {
        $($lhrP2Dot[i]).mouseenter(function () {
           $(this).addClass("on").siblings("i").removeClass("on");
            lhrP2Index = $(this).index();
            $lhrP2Img.stop(true, false).animate({
                left: -731 * lhrP2Index
            }, 200);
        });
    }

    // 门派与人物选择切换
    $lhrP3Mp = $(".lhr-page3 .mptab li");
    $lhrP3Screen = $(".lhr-page3 .mpcon .list");
    for (var i = 0; i < $lhrP3Mp.length; i++) {
        $($lhrP3Mp[i]).click(function () {
            $(this).addClass("on").siblings("li").removeClass("on");
            var index = $(this).index();
            $($lhrP3Screen[index]).show().siblings(".list").hide();
        });
    }

    $lhrP3juese = $(".lhr-page3 .mpcon .list .role_check .role1");
    console.log($lhrP3juese);
    $lhrP3jueseCke = $(".lhr-page3 .mpcon .list .role_check .role2");
    for (var i = 0; i < $lhrP3juese.length; i++) {
        $($lhrP3juese[i]).click(function () {
            $(this).parent(".role_check").removeClass("change").siblings(".juese").removeClass("check");
        });
        $($lhrP3jueseCke[i]).click(function () {
            $(this).parent(".role_check").addClass("change").siblings(".juese").addClass("check");
        });
    }

    // 游戏部分展示切换
    $lhrP4Tab = $(".lhr-page4 .tesewrap .tesetab li");
    $lhrP4Box = $(".lhr-page4 .tesewrap .tesecon");
    for (var i = 0; i < $lhrP4Tab.length; i++) {
        $($lhrP4Tab[i]).click(function () {
            $(this).addClass("on").siblings("li").removeClass("on");
            $lhrP4Box.eq($(this).index()).show().siblings(".tesecon").hide();
        });
    }

    $lhrP4Span = $(".lhr-page4 .tesewrap .tesecon span");
    $lhrP4ImgBox = $(".lhr-page4 .tesewrap .tesecon .img-box span .teseimgbor");
    $lhrP4Span.mouseenter(
        function () {
            $(this).children(".teseimgbor").show();
        }
    );
    $lhrP4Span.mouseleave(
        function () {
            $(this).children(".teseimgbor").hide();
        }
    );

    // 同人部分的切换功能
    $lhrP6Head = $(".lhr-page6 .trSlide .trHd li");
    $lhrP6Body = $(".lhr-page6 .trSlide .trBd");
    $lhrP6Head.click(function () {
        $(this).addClass("on").siblings("li").removeClass("on");
        var index = $(this).index();
        $lhrP6Body.animate({
            left: -1200 * index
        }, 200);
    });
    
    // 返回页面顶部
    $lhrGoTop = $(".lhr-footer .go_top");
    $lhrGoTop.click(function () {
        var timeId = setInterval(function () {
            if (window.pageYOffset == 0){
                clearInterval(timeId);
            }else {
                window.scrollTo(0, window.pageYOffset - Math.ceil((window.pageYOffset/10)));
                console.log(window.pageYOffset);
            }
        }, 10);
    });
    
    // 底部标题左右两边线条移动
    $lhrFootLi = $(".lhr-footer .footer_con ul li");
    $lhrFootLi.mouseenter(function () {
        $(this).children(".footer_con_title").children(".line1").animate({top: 0}, 200);
        $(this).children(".footer_con_title").children(".line2").animate({top: 41}, 200);
    });
    $lhrFootLi.mouseleave(function () {
        $(this).children(".footer_con_title").children(".line1").animate({top: 41}, 200);
        $(this).children(".footer_con_title").children(".line2").animate({top: 0}, 200);
    });


    // 右下角广告关闭
    $lhrBannerBox = $(".right-banner");
    $lhrBannerClose = $(".right-banner .box");
    $lhrBannerClose.click(function () {
        $lhrBannerBox.hide();
    });



});
