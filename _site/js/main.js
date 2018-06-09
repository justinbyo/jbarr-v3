$(document).ready(function(){

	var scrollToTop = $('#scroll-top');

	scrollToTop.click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	});

});
