( function($) {

  'use strict';

$(function(e) {
/*-------------------------------------------------------------------------------
  Smooth scroll to anchor
-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=90
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
	});
	$('.navbar-nav a ').on('click', function(){
	  if($('#navigation').removeClass('shownav')) {
	  }
    });
/*-------------------------------------------------------------------------------
	Add Placeholder
-------------------------------------------------------------------------------*/
	$("#comment").attr("placeholder", "Comment");

/*-------------------------------------------------------------------------------
	Navigation
-------------------------------------------------------------------------------*/
	$('#menu-toggle-bar').on('click', function(e) {
		   $("#navigation").toggleClass("shownav");
	});
	$('#menu-toggle-close').on('click', function(e) {
		   $("#navigation").removeClass("shownav");
	});

/*-------------------------------------------------------------------------------
 Timer
-------------------------------------------------------------------------------*/
 	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());

/*-------------------------------------------------------------------------------
  Tab li Add Class
-------------------------------------------------------------------------------*/

$('.conf-close').on('click', function(e) {
	if ( $(this).hasClass('menu-down') ) {
		$(this).removeClass('menu-down');
	} else {
		$(this).addClass('menu-down');    
	}
});	



/*-------------------------------------------------------------------------------
  Newsletter Validation
-------------------------------------------------------------------------------*/
function ValidateEmail(email) {
      var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return expr.test(email);
};
$('.newsletter-btn').on('click', function(e) {
	var flag=false;
    var email = $("input[name=EMAIL]").val();	
	if (email  =='') {
		jQuery("#n_email_error").html("Please Enter Email Address.");
		flag=true;
    }
	else if (!ValidateEmail( $("input[name=EMAIL]").val()) && email!=''){
	   $("#n_email_error").html("Please Enter Valid Email.");
	   flag=true;
    }
	else{
		 $("#n_email_error").empty();
	}
	if(flag==true){
	  return false;	
	}
 return true;
}); 


/*-------------------------------------------------------------------------------
  Background slider
-------------------------------------------------------------------------------*/
if (screen.width < 768) {
var owl = $('#slideshow');
      owl.owlCarousel({
        margin: 0,
        loop: true,
		autoplay: true,
		dots: false,
		transitionStyle:"fadeUp",
		autoplayTimeout:4000,
        responsive: {
          320: {items: 1},
        }
      })

}
else {
var owl = $('#slideshow');
      owl.owlCarousel({
        margin: 0,
        loop: true,
		autoplay: true,
		dots: false,
		transitionStyle:"fadeUp",
		autoplayTimeout:4000,
		autoWidth:true,
        responsive: {
          320: {items: 1},
        }
      })
}

	  
 /*------------------------------------------------------------------
	Gallery slider
-------------------------------------------------------------------*/
 	var owl = $('#gallery_slider');
      owl.owlCarousel({
        loop: true,
		autoplay: true,
		dots: false,
		nav: true,
		autoplayTimeout:3000,
        responsive: {
          0: {items: 1},
		  550: {items: 2},
		  700: {items: 3},
          1200: {items: 3}
        },
      navText: [
	  "<i class='fa fa-angle-left'></i>",
	  "<i class='fa fa-angle-right'></i>"
	  ],
   afterAction: function(el){
   this
   .$owlItems
   .removeClass('active')
   this
   .$owlItems
   .eq(this.currentItem + 1)
   .addClass('active')    
	} 
	}); 
/*------------------------------------------------------------------
	Testimonial
-------------------------------------------------------------------*/
	var owl = $('#testimonial_slider');
      owl.owlCarousel({
        margin: 10,
        loop: true,
		autoplay: true,
		dots: true,
		autoplayTimeout:4000,
        responsive: {
          0: {items: 1},
		  700: {items: 2},
          1200: {items: 2}
        }
      })
	  
/*------------------------------------------------------------------
Sponsors Slider
-------------------------------------------------------------------*/
var owl = $('#sponsors_slider');
      owl.owlCarousel({
        margin: 10,
        loop: true,
		autoplay: true,
		dots: true,
		nav: false,
		autoplayTimeout:2000,
        responsive: {
          0: {items: 1},
		  700: {items: 2},
          1200: {items: 4}
        }
      })
	  
/*------------------------------------------------------------------
Contact Form
-------------------------------------------------------------------*/
	$('#package_name').change(function(){
		var selectedValuse = $("#package_name option:selected").val();
		var selectedText = $("#package_name option:selected").text();
			$('#package_amount').val(selectedValuse).addClass('hidden');			
			$('#package_value').val(selectedText).addClass('hidden');			
	});

	$('#Numberofseats').change(function(){
		var selectedValuse1 = $("#Numberofseats option:selected").val();
			$('#product_quantity').val(selectedValuse1).addClass('hidden');			
	});
	$('#package_amount').attr('type', 'hidden' );
	$('#package_value').attr('type', 'hidden' );
	$('#product_quantity').attr('type', 'hidden' );
	
/*------------------------------------------------------------------
Contact Form
-------------------------------------------------------------------*/
$('.sub-menu').removeClass('sub-menu').addClass('dropdown-menu');

/*------------------------------------------------------------------
back to top
-------------------------------------------------------------------*/
 var top = $('#back-top');
	top .hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top .fadeIn();
			} else {
				top .fadeOut();
			}
		});
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
});

/*-------------------------------------------------------------------------------
  Sponsors-Slider
-------------------------------------------------------------------------------*/
	var owl = $("#sponsors-slider");
	owl.owlCarousel({
	  itemsCustom : [
		[0, 1],
		[450, 2],
		[550, 2],
		[767, 3],
		[991, 4],
	  ],
	  loop: true,
	  nav : true,
	  navigation : false,
	  autoPlay  : 3000
	}); 
/*------------------------------------------------------------------
Gallery slider-Style 2
-------------------------------------------------------------------*/
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	  });



var x = screen.width + "px";
document.getElementById("siderwidth1").style.width = x;
document.getElementById("siderwidth2").style.width = x;
document.getElementById("siderwidth3").style.width = x;
document.getElementById("siderwidth4").style.width = x;
document.getElementById("siderwidth5").style.width = x;

})(jQuery);
	

