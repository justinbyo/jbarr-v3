
var wrapper = $('.wrapper');
var container = $('.container');
fontSize = '';
codeFontSize = '';
headerFontSize = '';
ctaFontSize = '';

// This array sets up the animation steps
// time: number of milliseconds before adding the class
// step: the name of the class to add to the element
// selector: the name of the element that you're applying the class to

var animations = [
    {
    	// Length of time that we read .text-1
    	// Slides the <table> scene with red background
        time:2000,
        step:"slide-2",
        selector:'.container'
    },
    {
    	// Pops the browser wrapper into place
        time:250,
        step:"js-active",
        selector:'.motion-1--browser'
    },
    {
    	// Pops the table layout into place
        time:250,
        step:"js-active",
        selector:'.motion-1--table'
    },
    {
        time:1500,
        step:"js-active",
        selector:'.motion-1--image'
    },
    {
    	// Populate the tabular browser with fake content
        time:1500,
        step:"js-active",
        selector:'.motion-1--image .decoration'
    },
    {
    	// Expand the browser and its contents to the size of the container
        time:1500,
        step:"js-make-big",
        selector:'.motion-1--browser, .motion-1--image'
    },
    { 
    	// Hide the blue table layout in the meantime
    	// Since it's not visible, and not rotating, hide it to avoid rendering issues
        time:1,
        step:"js-hide",
        selector:'.motion-1--table'
    },
    {
    	// Start the next scene
    	// Red <table> scene slides to the left
    	// Text-2 with @media copy is now visible
        time:300,
        step:"slide-3",
        selector:'.container'
    },
    {
    	// While Text-2 is still visible, prep for the next scene
    	// .slide-4 moves the responsive scene with blue background (.motion-2)
    	// underneath the current .text-2
        time:100,
        step:"slide-4",
        selector:'.container'
    },
    {
    	// Length of time that we read .text-2
    	// After we're finished reading, shrink the .text-2 scene down
    	// into the shape of the browser in .motion-2
        time:2000,
        step:"js-shrinkDown",
        selector:'.text-2'
    },
    {
    	// Hide .text-2, which can't be seen anymore
    	// TA DA! Transition to .motion-2
        time:250,
        step:"js-hide",
        selector:'.text-2'
    },
    {
    	// Pop .motion-2's browser content into place
        time:300,
        step:"js-active",
        selector:'.motion-2--content'
    }    ,
    {
		// Populate the .motion-2 blue hero with content
        time:500,
        step:"js-active",
        selector:'.motion-2--hero table'
    },
    {
    	// Populate the .motion-2 below-the-fold area with content
        time:500,
        step:"js-active",
        selector:'.motion-2--content table.main-content'
    },
    {
    	// Shrink the browser into the shape of an iPhone
        time:1000,
        step:"js-transform-1",
        selector:'.motion-2--device'
    },
    {	
	    // Animate the iPhone into the shape of an iPad
        time:1000,
        step:"js-transform-2",
        selector:'.motion-2--device'
    },
    {
    	// Expand the black bezel to 100% and shrink the rest of the content down to 0
        time:1000,
        step:"js-shrinkDown",
        selector:'.motion-2--device'
    },
    {
    	// Move the final .text-3 scene into place
    	// The background is black so we don't notice
        time:250,
        step:"slide-5",
        selector:'.container'
    },
    {
    	// Hide .motion-2, which can't be seen anyway
        time:100,
        step:"js-hide",
        selector:'.motion-2'
    },
    {	
    	// Display:none .motion-2, so user can interact with .text-3 beneath it
        time:150,
        step:"js-kill",
        selector:'.motion-2'
    },
    {
    	// Pop final CTA content into place
        time:200,
        step:"js-active",
        selector:'.text-3'
    },
    {
    	// Fade-in replay button to repeat the fun
        time:250,
        step:"js-show",
        selector:'.replay'
    }
];

// Font-sizes need to be a percentage of the container's height
// These percentages are arbitrary based on what looked good

function textSize(){
	fontSize = parseInt(container.height());
	codeFontSize = parseInt(0.065454545 * fontSize) +"px";
	headerFontSize = parseInt(0.07 * fontSize) +"px";
	ctaFontSize = parseInt(0.06 * fontSize) +"px";
	$("p.code").css('font-size', codeFontSize);
	$(".text-3 .header").css('font-size', headerFontSize);
	$(".text-3 p:not(.header)").css('font-size', ctaFontSize);
}

// Resize .wrapper to be a square with dimension that equal the size of the browser
// Switch these values to window width if more appropriate

function windowResize(){
	windowHeight = $(window).height();
	wrapper.width(windowHeight).height(windowHeight);
	// windowWidth = $(window).width();
	// wrapper.width(windowWidth).height(windowWidth);
}

// Grab data from the animation array
// and create sets of class additions to elements after defined setTimeouts

function runAnimation(i, timeline){
    setTimeout(function(){
    	$(animations[i].selector).addClass(animations[i].step);
    }, timeline);
}

// Go through the array, and execute each step one at a time in order
// by doing runAnimation() on each array element

function animationTimeline(){
	var timeline = 0;

	for(var i=0; i<animations.length; i++){
	    timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10);
	    runAnimation(i, timeline);
	}
}

// Go back to the starting state

function animationUndo(){
	// Fade out everything so the undo isn't messy
	container.addClass('js-hide');
	// Wait a second and then remove every class we added
	setTimeout(function(){
		// Loop through the array and remove every class from its paired selector
		for(var i=0; i<animations.length; i++){
		$(animations[i].selector).removeClass(animations[i].step);
	}
	},500);
	// After everything's back in its starting position, fade everything back in
	setTimeout(function(){
		container.removeClass('js-hide');
	},1000);
}


// Replay the animation
$('#replay').click(function(){
	// Reset all the element positions and styles
	animationUndo();
	// Wait a second, and then start the animation again
	setTimeout(animationTimeline,1000);
});

// Make sure the containers and text are the right size for the viewport
$(document).ready(function(){
	windowResize()
	textSize();
});

// When the viewport size changes, resize everything accordingly
$(window).resize(function(){
	windowResize();
	textSize();
});

// When everything is loaded, start the animation!
$(window).load(function() {
      animationTimeline();
});