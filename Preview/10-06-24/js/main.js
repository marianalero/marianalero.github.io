;(function () {
	
	'use strict';
	var params = {};
	location.search.slice(1).split("&").forEach(function(pair) {
		pair = pair.split("=");
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);});
	console.log("se entro a la invitacion",params.number)
		var number =(params.number == undefined )?0:params.number
		var pases = (number == 1) ? " pase" : " pases";
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

	// let boton = document.querySelector(".reproductor")
    // let audioEtiqueta = document.querySelector("audio")

    // boton.addEventListener("click", () => {
	// 	audioEtiqueta.setAttribute("src", "./audio/cancion3.mp3")
	// 	var play = boton.classList.contains('play');
	// 	if(play){
	// 		boton.classList.add('pause')
	// 		boton.classList.remove('play')
	// 		audioEtiqueta.pause()
	// 	}else{
	// 		boton.classList.remove('pause')
	// 		boton.classList.add('play')
	// 		audioEtiqueta.play()
	// 	}
      
      
    //   console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    // });

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
	
	const formatNumber = n => ("0" + n).slice(-2);
	// Set the date we're counting down to
		var countDownDate = new Date("July 20, 2024 19:00:00").getTime();

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
		document.getElementById("days").innerHTML = formatNumber(days) +"<br/> <span style='font-size: 16px;'>Días</span>";
		document.getElementById("hours").innerHTML = formatNumber(hours) + "<br/> <span style='font-size: 16px;'>Hrs</span>";
		document.getElementById("minutes").innerHTML = formatNumber(minutes) + "<br/> <span style='font-size: 16px;'>Mins</span>";
		document.getElementById("seconds").innerHTML = formatNumber(seconds) + "<br/> <span style='font-size: 16px;'>Segs</span>";

		// If the count down is finished, write some text 
		if (distance < 0) {
		 clearInterval(x);
		 document.getElementById("demo").innerHTML = "The Wedding Ceremony is Over";
		}
		}, 1000);	
	
		
	var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};
    
	document.getElementById("confirmar").addEventListener("click", confirmar);
	function confirmar(){
		var name = document.getElementById("name").value
		var number = document.getElementById("numInv").innerHTML;
		number = number.substring(30,32);
		// number = number.slice(-6);
		var confirmText = "";
		var radioValue = $("input[name='confirm']:checked").val();
		
		if(radioValue == "confirm"){
			confirmText = "Asistiré"
		}
		else
		{
			confirmText = "No asistiré";
			number =0;
		}

//https://docs.google.com/forms/d/e/1FAIpQLSetTSl9g_PMizcX8gTcAl9-hwhiMlQ0XTmVJQUSBObHeJhuPA/viewform?usp=pp_url&entry.516140191=s&entry.1599079301=s&entry.465259973=s
		let url = "https://docs.google.com/forms/d/e/1FAIpQLSetTSl9g_PMizcX8gTcAl9-hwhiMlQ0XTmVJQUSBObHeJhuPA/formResponse?entry.516140191="+name+"&entry.1599079301="+confirmText+"&entry.465259973="+number+'&submit=Submit';

		fetch(url, { method: 'GET', 
		mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
		redirect: "follow",
		referrer: "no-referrer",
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		},
		 } )
		.then(res=> {
			var confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'))
			confirmModal.show()
		})
		.catch(reason => console.log(reason));
	
	}

	let boton = document.querySelector(".btn-flotante")
    let audioEtiqueta = document.querySelector("audio")

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
			let btn = document.querySelector(".btn-flotante")
			btn.click();
		});
	});

	

}());