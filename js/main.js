var fullHeightContainer = '';
var windowHeight = '';

function resizeWindow() {

	fullHeightContainer = $('.js-fullHeight');
    windowHeight = $(window).height();
    fullHeightContainer.css('min-height', windowHeight);
}

$(document).ready(resizeWindow);
$(window).resize(resizeWindow);

$(document).ready(function(){
	
	var belowFold = $('.home--below-fold');
	
	var projects = $('.projects');
	var contact = $('.contact');
	var scrollToTop = $('#scroll-top');
	
	scrollToTop.click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	});
		
});