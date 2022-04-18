

$( document ).ready( function() {

    $('.all-features').click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).text("See less features");
        } else {
            $(this).text("See all features");
        }
    });	
	
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

	$("#testimonial__slider").owlCarousel({
		items: 4,
		loop: true,
		margin: 20,
		dots: true,
		navigation: false,
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

 });