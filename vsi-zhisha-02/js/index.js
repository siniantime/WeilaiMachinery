$(document).ready(function () {
	//鼠标移入切换菜单
	(function () {
		var productTab = $('#productTab li');
		var productTabContent = $('#productContent > div')
		var iNow=0;
		productTab.mouseenter(function(event) {
			/* Act on the event */
			//alert('a');
			
			productTab.removeClass('active');
			$(this).addClass('active');
			iNow =$(this).index();
			productTabContent.removeClass('active in');
			productTabContent.eq(iNow).addClass('active in');

		});
	})();

	(function(){

		//$('.banner h1').animate({height: "200px",opacity:0},800);
		$('.banner h1').addClass('animated bounceInDown');
		$('.banner p').addClass('animated bounceInDown');
		$('.banner a').addClass('animated bounceInDown');
		//alert($(window).scrollTop());
		//alert($('.banner h1').offset().top);
		$(window).scroll(function() {
			/* Act on the event */
			//if ($('window').scrollTop() ) {}
			//alert($(window).scrollTop());
			//alert('a');
			/*
			if (startAnimated($('.wuliao h1'))) {
				$('.wuliao h1').addClass('animated fadeInRight');
				$('.wuliao p').addClass('animated fadeInRight');
				$('.wuliao a').addClass('animated fadeInRight');	
				//$(this).unbind();
			};

			if (startAnimated($('.yingyong h1'))) {
				$('.yingyong h1').addClass('animated fadeInLeft');
				$('.yingyong ul').addClass('animated fadeInLeft');
				$('.yingyong a').addClass('animated fadeInLeft');	
				//$(this).unbind();
			};

			if (startAnimated($('.yingyong h1'))) {
				$('.yingyong h1').addClass('animated fadeInLeft');
				$('.yingyong ul').addClass('animated fadeInLeft');
				$('.yingyong a').addClass('animated fadeInLeft');	
			};

			if (startAnimated($('.canshu h1'))) {
				$('.canshu h1').addClass('animated fadeIn');
			};

			if (startAnimated($('.pic h1'))) {
				$('.pic h1').addClass('animated flipInY');
			};
			*/
			/*
			if (startAnimated($('.anli h1'))) {
				$('.anli h1').addClass('animated zoomIn');
			};
			*/
			//var zoomIn = 'zoomIn';

			startAnimated($('.wuliao h1'),'fadeInRight');
			startAnimated($('.wuliao p'),'fadeInRight');
			startAnimated($('.wuliao a'),'fadeInRight');

			startAnimated($('.yingyong h1'),'fadeInLeft');
			startAnimated($('.yingyong ul'),'fadeInLeft');
			startAnimated($('.yingyong a'),'fadeInLeft');

			startAnimated($('.canshu h1'),'fadeInLeft');

			startAnimated($('.pic h1'),'flipInY');

			startAnimated($('.anli h1'),'zoomIn');

		});

		//执行动画
		function startAnimated(dom,animated) {
			// body...
			//return ;
			if ($(window).scrollTop() > dom.offset().top - $(window).height()) {
				dom.addClass('animated');
				dom.addClass(animated);
			}
		}
	})();
})
