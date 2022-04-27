

// Scroll icon visible
$(window).scroll(function() {
	if ($(this).scrollTop() > 50) {
		$('.scroll__top').fadeIn();
		$('.header__top--info').addClass('d-none');
		$('.hoston__nav--1').addClass('hoston__bg--1');
		$('.hoston__nav--2').addClass('hoston__bg--2');
		$('.hoston__nav--3').addClass('hoston__bg--3');
	} else {
		$('.scroll__top').fadeOut();
		$('.header__top--info').removeClass('d-none');
		$('.hoston__nav--1').removeClass('hoston__bg--1');
		$('.hoston__nav--2').removeClass('hoston__bg--2');
		$('.hoston__nav--3').removeClass('hoston__bg--3');
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

	// Hoston 2 - Testimonial slider
	$("#hoston-testimonial-2").owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		dots: false,		
		nav: true,
		navText: [
			"<i class='bi bi-arrow-left'></i>",
			"<i class='bi bi-arrow-right'></i>"
			],
		autoplay: false,
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
			items: 1,
		  },
		},
	});	

	// Footer slider
	$("#footer__slider").owlCarousel({
		items: 6,
		loop: true,
		margin: 20,
		dots: false,		
		nav: false,
		autoplay: true,
	    slideSpeed : 2000,
	    smartSpeed: 1500,		
		autoHeight:true,
		responsive: {
		  0: {
			items: 1,
		  },
		  540: {
			  items: 2,
		  },
		  767: {
			items: 4,
		  },
		  992: {
			items: 5,
		  },
		  1200: {
			items: 6,
		  },		  
		},
	});	

	// F.A.Q accordion
	$("#faq")
		.on("show.bs.collapse", function (e) {
			$(e.target).parent(".accordion-item").addClass("accordion-shadow");
		})
		.on("hide.bs.collapse", function (e) {
			$(e.target).parent(".accordion-item").removeClass("accordion-shadow");
		});	

	// vmap
	$("#vmap").length !== 0 && jQuery('#vmap').vectorMap({
		map: 'world_en',
		backgroundColor: '#ffffff',
		color: '#ffffff',
		hoverOpacity: 0.7,
		selectedColor: '#666666',
		enableZoom: true,
		showTooltip: true,
		values: sample_data,
		scaleColors: ['#ECECEC'],
		normalizeFunction: 'polynomial',
	});
		
	$("#vmap").length !== 0 && jQuery("#vmap").vectorMap("set", "colors", { ca: "#C43526", au: "#0C4CA3", ru: "#0036A0" });

 });