var i=1
var flage=false;
setInterval(function  () {
	$('#header_lb_l').animate({marginTop:-50*i+'px'});
	i++;
	$('#header_lb_l').append('<li><a href="#">领取网易严选宝箱</a></li>')
		if($('#header_lb_l li').length>50){
			$('#header_lb_l').css('margin-top',0);
			i=1;
			$('.header_lb li:first').next().nextAll().remove();
		}	
		
	if (!flage) {
		$('.banner_lb .banner_show').show().siblings('li').hide();
		$('.banner').css('background-color','rgb(62,165,194)');
		flage=true;
	}else{
		$('.banner_lb .banner_show').hide().siblings('li').show();
		$('.banner').css('background-color','rgb(83,173,147)');
		flage=false;
	}
},2000)

$(function  () {
	$('.banner_bottom_show').mouseenter(function  () {
		$(this).parents('.banner_bottom').css('bottom',0);
	});
	$('.banner_bottom').mouseleave(function  () {
		$(this).css('bottom',-65);
	});
})


var j=0;
$(function  () {
	$('#bbh_r').on('click',function  () {
			if (j<11) {
				j++;
				$('#bbh_ul').css('left',-127*j);
			}
		});
	$('#bbh_l').on('click',function  () {
			if (j>0) {
				j--;
				$('#bbh_ul').css('left',-127*j);
			}
	});	
	let li=$('.ml_ul li')
	$('.ml_p a').on('click',function  () {
		var ul=document.getElementsByClassName('ml_ul')[0];
		var li=ul.getElementsByTagName('li');
		for (var i = 0; i < li.length; i++) {
			if (li[i].getAttribute('class')==$(this).attr('class')) {
				li[i].style.display='block';
			}else{
				li[i].style.display='none';
			}			
		}
		$(this).css('background','rgb(225,250,96)').siblings('a').css('background','skyblue');
		return false;
	});
	$('#main_l_dq').on('click',function  () {
		$('#main_l_dq').siblings('a').css('background','skyblue');
		$('.ml_ul li').show();
	});
	$('.zz_xx').on('click',function  () {
		$('.zhezhao_tan').hide().siblings('.zhezhao').hide(); 	
	})
})
