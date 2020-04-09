(function($) {
	"use strict";
	 	
		
		
/*  Preloader*/

$(window).on('load',function(){

	var preLoder = $(".lds-css");
	preLoder.fadeOut(1000);
   
});    
	
/*  slimmenu */  

$('.slimmenu').slimmenu({
	resizeWidth: '992',
	collapserTitle: '',
	animSpeed: 'fast',
	easingEffect: null,
	indentChildren: true,
});		
		


/*  AOS */  
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom'

    });		
		
/*  tooltip */  



$('[data-toggle="tooltip"]').tooltip();


/*  fitVids */ 

$(".container").fitVids();

 
/*  scrollTop */ 


var header = $(".social-fixed");
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 600) {
		header.removeClass('hide-social').addClass("show-social");
	} else {
		header.removeClass("show-social").addClass('hide-social');
	}
});
 
/*  scrollTop */  

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {       
        $('#return-top').fadeIn(200);    
    } else {
        $('#return-top').fadeOut(200);   
    }
});

$('#return-top').on( 'click',function() {      
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
}

);


/*  banner slider */  
$('.banner-slider').owlCarousel({
	nav: true,
	dots: false,
	margin: 30,
	autoplay:true,
	responsive: {
		0: {
			items: 1
		},
		1000: {
			items: 1
		}
	}

});	

/*  infinite-scroll */  

$('.infinite-scroll').infiniteScroll({
	path: function path() {
		var pageNumber = this.loadCount + 1;
		return 'page' + pageNumber + '.html';
	},
	append: '.col-md-6',
	button: '.loadmore-button',
	scrollThreshold: false
});

/*  latest slider */  
$('.latest-slider').owlCarousel({
	nav: true,
	dots: false,
	margin: 30,
	autoplay:true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 2
		}
	}

});	
/*  author bio slider */  
$('.author-bio-slider').owlCarousel({
	nav: true,
	dots: false,
	margin: 30,
	autoplay:true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}

});	



	
	
}(jQuery));

 

		

