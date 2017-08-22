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
})
