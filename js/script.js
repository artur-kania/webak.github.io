$(document).ready(function () {

	var pageStatus = 1;  // 1 = Home Page, 2 = About...
		onWork = false; // preventing page change
						// when animations are executed

	function getNavMargin() {
		var marginFromNav = $('nav li').innerWidth();

		console.log('Nav margin: ' + marginFromNav);

		$('#home-page').css('padding-left', marginFromNav);
		$('#about-page').css('padding-left', marginFromNav);
		$('#contact-page').css('padding-left', marginFromNav);
	}

	function iconsPosition () {
		var colLeftWidth = $('#about-page .col-left').innerWidth(),
			colLeftHeight = $('#about-page .col-left').innerHeight(),
			iconSize = Math.floor(colLeftWidth / 3) - 1;

			console.log('width: ' + colLeftWidth + ' height: ' + colLeftHeight);	

		$('#about-page .ab1').css('height', colLeftHeight - colLeftWidth);
		$('#about-page .flat-icons').css('height', colLeftWidth);
		$('#about-page .flat-icons span')
			.css('height', iconSize)
			.css('width', iconSize);
	}

	function animateHome () {
		$('#home-page .logo-left').toggleClass('animation1in animation1out');
		$('#home-page .contact').toggleClass('animation2out animation2in');
		$('#home-page .clock').toggleClass('animation3out animation3in');
		$('#home-page .my-name').toggleClass('animation4out animation4in');
		$('#home-page .logo-right').toggleClass('animation5out animation 5in');
		$('#home-page .x3').toggleClass('animation6out animation6in');
		$('#home-page .pic1').toggleClass('animation7out animation7in');
		$('#home-page .my-desk').toggleClass('animation8out animation8in');
		$('#home-page .devices').toggleClass('animation9out animation9in');
	}

	function animateAbout () {
		$('#about-page .ab1').toggleClass('animation1in animation1out');
		$('#about-page .flat-icons').toggleClass('animation3in animation3out');
	}

	$('#show-home').click(function (event) {
		event.preventDefault();

		if (pageStatus != 1 && onWork == false) {
			onWork = true;
		
			$('#home-page').css('display', 'flex');

			animateHome();

			setTimeout(function () {
				$('#about-page').css('display', 'none');
				$('#contact-page').css('display', 'none');
				onWork = false;
				pageStatus = 1;
			}, 1000);
		}
	});

	$('#show-about').click(function (event) {
		event.preventDefault();

		if (pageStatus != 2 && onWork == false) {
			onWork = true;

			$('#about-page').css('display', 'flex');		
			iconsPosition();

			if (pageStatus == 1) {
				animateHome();
			}	

			if ( $('#about-page .ab1').hasClass('animation1out') ) {
				animateAbout();
			}
			

			setTimeout(function () {
				$('#home-page').css('display', 'none');
				$('#contact-page').css('display', 'none');
				onWork = false;
				pageStatus = 2;
			}, 2100);
		}
	});

	$('#show-contact').click(function (event) {
		event.preventDefault();

		if (pageStatus != 3 && onWork == false) {
			onWork = true;
			
			$('#contact-page').css('display', 'flex');
		
			if (pageStatus == 1) {
				animateHome();
			}

			if (pageStatus == 2) {
				animateAbout();
			}	
				
			setTimeout(function () {
				$('#home-page').css('display', 'none');
				$('#about-page').css('display', 'none')
				onWork = false;
				pageStatus = 3;
			}, 2100);
		}
	});

// =========================================

	setTimeout(function () {
		$('#home-page').css('visibility', 'visible');
		$('#home-page .my-name').addClass('animation4in');
	}, 1000);

	getNavMargin();
	//iconsPosition();

	$(window).resize(function () {
		getNavMargin();
		iconsPosition();
	});




});