;(function () {
	
	'use strict';
	var params = {};
	location.search.slice(1).split("&").forEach(function(pair) {
		pair = pair.split("=");
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);});
	console.log("se entro a la invitacion",params.number)
		var number =(params.number == undefined )?0:params.number
		var pases = (number == 1) ? " persona" : " personas";
	document.getElementById("numInv").innerHTML = "Esta invitación es valida por "+ number+ pases;
	
	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};



	// Carousel Feature Slide
	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: false
		});
	};

	var sliderMain = function() {
		
	  	$('#qbootstrap-slider-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};



	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
			
				$(this.element).addClass('fadeInUp animated');
			
			}

		} , { offset: '75%' } );

	};


	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-qbootstrap-nav-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}

			event.preventDefault();
			
		});

	};


	// Parallax
	var parallax = function() {
		if ( !isiPad() || !isiPhone() ) {
			$(window).stellar();
		}
	};



	// Page Nav
	// var clickMenu = function() {

	// 	$('a:not([class="external"])').click(function(event){
	// 		var section = $(this).data('nav-section'),
	// 			navbar = $('#navbar');
	// 	    $('html, body').animate({
	// 	        scrollTop: $('[data-section="' + section + '"]').offset().top
	// 	    }, 500);

	// 	    if ( navbar.is(':visible')) {
	// 	    	navbar.removeClass('in');
	// 	    	navbar.attr('aria-expanded', 'false');
	// 	    	$('.js-qbootstrap-nav-toggle').removeClass('active');
	// 	    }

	// 	    event.preventDefault();
	// 	    return false;
	// 	});

	// };

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};
	var navigationSection = function() {

		var $section = $('div[data-section]');
		
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		    
		  	}
		}, {
		  	offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#qbootstrap-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top qbootstrap-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top qbootstrap-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top qbootstrap-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};



	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};


	var inlineSVG = function() {
		$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

		});
	};
	

    // timer = setInterval(showRemaining, 1000);
	const formatNumber = n => (n<10) ? ("0" + n).slice(-2) : n;
	// Set the date we're counting down to
		var countDownDate = new Date("May 17, 2025 17:30:00").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;
			
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in an element with id="demo"
		// document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
		// + minutes + "Minutes " + seconds + "Seconds ";

		// Display the result in an element with id="demo"
     	document.getElementById("days").innerHTML ="<br/><span class='countdown-circle'>"+formatNumber(days)+"</span><span style='font-size: 20px;'>Días</span>";
		document.getElementById("hours").innerHTML = "<br/><span class='countdown-circle'>"+formatNumber(hours) + "</span> <span style='font-size: 20px;'>Hrs</span>";
		document.getElementById("minutes").innerHTML = "<br/><span class='countdown-circle'>"+formatNumber(minutes) + "</span> <span style='font-size: 20px;'>Mins</span>";
		document.getElementById("seconds").innerHTML = "<br/><span class='countdown-circle'>"+formatNumber(seconds) + "</span> <span style='font-size: 20px;'>Segs</span>";

		// If the count down is finished, write some text 
		if (distance < 0) {
		 clearInterval(x);
		//  document.getElementById("demo").innerHTML = "The Wedding Ceremony is Over";
		}
		}, 1000);	
		
	var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};

	

	document.getElementById("confirmarUNO").addEventListener("click", confirmar);
	function confirmar(){
		var name = document.getElementById("name").value
		var number = document.getElementById("numInv").innerHTML;
		number = number.substring(30,32);
		var confirmText = "Hola,";
		var selNumInv = $( "#selNumInv" ).val();
		var radioValue = $("input[name='confirm']:checked").val();
		if(radioValue == "confirm"){
			confirmText += "%20quiero%20confirmar%20mi%20asistencia%20para%20la%20quinceañera%20de%20Mia.Número de personas:"+selNumInv;
		}
		else
		{
			confirmText+="%20lamentablemente%20no%20podré%20asistir%20a%20la%20quinceañera%20de%20Mia.";
		}
	

		window.open("https://wa.me/+16024417172/?text="+ confirmText,"_blank");
	 	
		
	
	}
	document.getElementById("confirmarDOS").addEventListener("click", confirmar);
	function confirmar(){
		var name = document.getElementById("name").value
	
		var number = document.getElementById("numInv").innerHTML;
		number = number.substring(30,32);
		var confirmText = "Hola,";
		var selNumInv = $( "#selNumInv" ).val();
		var radioValue = $("input[name='confirm']:checked").val();
		if(radioValue == "confirm"){
			confirmText += "%20quiero%20confirmar%20mi%20asistencia%20para%20la%20quinceañera%20de%20Mia.Número de personas:"+selNumInv;
		}
		else
		{
			confirmText+="%20lamentablemente%20no%20podré%20asistir%20a%20la%20quinceañera%20de%20Mia.";
		}
	

		window.open("https://wa.me/+16024417171/?text="+ confirmText,"_blank");
	 	
		
	
	}
	let boton = document.querySelector(".btn-flotante");
    let audioEtiqueta = document.querySelector("audio");

    boton.addEventListener("click", () => {
		audioEtiqueta.setAttribute("src", "./audio/cancion.mp3")
		var play = boton.classList.contains('play');
		let icon = document.getElementById("btn-flotante-icon")
		if(play){
			icon.classList.remove('icon-pause')
			icon.classList.add('icon-play')
			boton.classList.add('pause')
			boton.classList.remove('play')
			audioEtiqueta.pause()
		}else{
			icon.classList.add('icon-pause')
			icon.classList.remove('icon-play')
			boton.classList.remove('pause')
			boton.classList.add('play')
			audioEtiqueta.play()
		}
      
      
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    });

	// Document on load.
	$(function(){

		burgerMenu();
		testimonialCarousel();
		sliderMain();
		// clickMenu();
		parallax();
		// windowScroll();
		navigationSection();
		contentWayPoint();
		inlineSVG();
		bgVideo();
	
		$('#asistire').prop('checked',true);
		var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
		myModal.show()
		
		$("#btnEntrar").click(function(){
			myModal.hide()
			let btn2 = document.querySelector(".btn-flotante")
			btn2.click();
		});

		for (var i = 0; i <= number; i++) {
			$('#selNumInv').append('<option value="'+i+'">'+i+'</option>');
		}
		
	});

	
}());