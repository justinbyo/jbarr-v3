var fullHeightContainer = '';
var windowHeight = '';

// I'm hiding this for a bit

/*
function resizeWindow() {

	fullHeightContainer = $('.js-fullHeight');
    windowHeight = $(window).height();
    
    if (windowHeight > 1000 && windowHeight > 800){
	    $('.js-fullHeight').removeClass('js-mediumPadding');
	    $('.js-fullHeight').addClass('js-bigPadding');
    }
    else if (windowHeight > 800 ){
	    $('.js-fullHeight').removeClass('js-bigPadding');
	    $('.js-fullHeight').addClass('js-mediumPadding');
    }
    else {
	    $('.js-fullHeight').removeClass('js-bigPadding');
	    $('.js-fullHeight').removeClass('js-mediumPadding');
    }
}
*/

// $(document).ready(resizeWindow);
// $(window).resize(resizeWindow);

$(document).ready(function(){
	
	var belowFold = $('.home--below-fold');
	
	var projects = $('.projects');
	var contact = $('.contact');
	var scrollToTop = $('#scroll-top');
	
	scrollToTop.click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	});
		
});