

// Scroll icon visible
$(window).scroll(function() {
	if ($(this).scrollTop() > 150) {
		$('.scroll__top').fadeIn();
	} else {
		$('.scroll__top').fadeOut();
	}
}); 

// Scroll top
$('#page__scroll').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});

$( document ).ready( function() {

	// View all features
    $('.all-features').click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).text("See less features");
        } else {
            $(this).text("See all features");
        }
    });	
	
	// Counter up
	jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"];
    
    	var $counters = $(".counter");
    
    	/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this),
				handler: function() { 
					counterUp(counter, {
						duration: 2000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});

	// Testimonial slider
	$("#testimonial__slider").owlCarousel({
		items: 4,
		loop: true,
		margin: 20,
		dots: true,		
		nav: false,
		autoplay: true,
	    slideSpeed : 2000,
	    smartSpeed: 1500,		
		autoHeight:true,
		responsive: {
		  0: {
			items: 1,
		  },
		  600: {
			items: 1,
		  },
		  1000: {
			items: 3,
		  },
		},
	});

	$("#testimonial2__slider").owlCarousel({
		items: 3,
		loop: true,
		margin: 20,
		dots: true,		
		nav: false,
		autoplay: true,
	    slideSpeed : 2000,
	    smartSpeed: 1500,		
		autoHeight:true
	});	

	// F.A.Q accordion
	$("#faq")
		.on("show.bs.collapse", function (e) {
			$(e.target).parent(".accordion-item").addClass("accordion-shadow");
		})
		.on("hide.bs.collapse", function (e) {
			$(e.target).parent(".accordion-item").removeClass("accordion-shadow");
		});	

 });