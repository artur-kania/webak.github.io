/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():a[b]=c()}(this,"verge",function(){function a(){return{width:k(),height:l()}}function b(a,b){var c={};return b=+b||0,c.width=(c.right=a.right+b)-(c.left=a.left-b),c.height=(c.bottom=a.bottom+b)-(c.top=a.top-b),c}function c(a,c){return a=a&&!a.nodeType?a[0]:a,a&&1===a.nodeType?b(a.getBoundingClientRect(),c):!1}function d(b){b=null==b?a():1===b.nodeType?c(b):b;var d=b.height,e=b.width;return d="function"==typeof d?d.call(b):d,e="function"==typeof e?e.call(b):e,e/d}var e={},f="undefined"!=typeof window&&window,g="undefined"!=typeof document&&document,h=g&&g.documentElement,i=f.matchMedia||f.msMatchMedia,j=i?function(a){return!!i.call(f,a).matches}:function(){return!1},k=e.viewportW=function(){var a=h.clientWidth,b=f.innerWidth;return b>a?b:a},l=e.viewportH=function(){var a=h.clientHeight,b=f.innerHeight;return b>a?b:a};return e.mq=j,e.matchMedia=i?function(){return i.apply(f,arguments)}:function(){return{}},e.viewport=a,e.scrollX=function(){return f.pageXOffset||h.scrollLeft},e.scrollY=function(){return f.pageYOffset||h.scrollTop},e.rectangle=c,e.aspect=d,e.inX=function(a,b){var d=c(a,b);return!!d&&d.right>=0&&d.left<=k()},e.inY=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.top<=l()},e.inViewport=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.right>=0&&d.top<=l()&&d.left<=k()},e});

/* ======================================== */

$(document).ready(function(){
	$('nav a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(document).ready(function () {

	var pageStatus = 1,  // 1 = Home Page, 2 = About...
		onWork = false; // preventing page change
						// when animations are executed
	var viewportWidth;
	var marginFromNav;
	

	function getNavMargin() {
			marginFromNav = $('nav li').innerWidth();
			
			viewportWidth = verge.viewportW();

		console.log('Nav margin: ' + marginFromNav);
		console.log('viewportWidth: ' + viewportWidth);

		if (viewportWidth >= 768) { 

			$('#home-page').css('padding-left', marginFromNav);
			$('#about-page').css('padding-left', marginFromNav);
			$('#contact-page').css('padding-left', marginFromNav);

			$('#home-page').css('padding-top', '0');
			$('#about-page').css('padding-top', '0');
			$('#contact-page').css('padding-top', '0');

		} else {

			$('#home-page').css('padding-top', marginFromNav);
			$('#about-page').css('padding-top', marginFromNav);
			$('#contact-page').css('padding-top', marginFromNav);

			$('#home-page').css('padding-left', '0');
			$('#about-page').css('padding-left', '0');
			$('#contact-page').css('padding-left', '0');

		}
	}

	function iconsPosition () {
		var colLeftWidth = document.getElementById('colleft').clientWidth,
			colLeftHeight = document.getElementById('colleft').clientHeight,
			iconSize,
			colHeight;

			console.log('width: ' + colLeftWidth + ' height: ' + colLeftHeight); 
 

			if (colLeftWidth <= 400) {
				iconSize = colLeftWidth / 3;
				colHeight = iconSize * 4;
			}

			if (colLeftWidth > 400) {
				iconSize = colLeftWidth / 4
				colHeight = iconSize * 3;
			}

			console.log('icon size: ' + iconSize + ' colHeight ' + colHeight);
				
		$('#about-page .col-left .flat-icons')
			.css('height', colHeight)
			.css('width', colLeftWidth + 2);
		$('#about-page .col-left .flat-icons span')
			.css('height', iconSize)
			.css('width', iconSize);
		$('#about-page .col-left > div:nth-child(1)')
			.css('height', (colLeftHeight - colHeight) / 2);
		$('#about-page .col-left > div:nth-child(3)')
			.css('height', (colLeftHeight - colHeight) / 2);


		// test for flat-icons on smaller devices
		
		if (viewportWidth >= 768) {
			var iconSizeSmall = ($(window).width() - marginFromNav) / 12;
		}

		if (viewportWidth < 768) {
			var iconSizeSmall = $(window).width() / 12;
		}

		$('#about-page .col-center .flat-icons')
			.css('height', iconSizeSmall)
		$('#about-page .col-center .flat-icons span')
			.css('height', iconSizeSmall)
			.css('width', iconSizeSmall);

	}

/*	function animateHome () {
		$('#home-page .col-center > div:nth-child(1)')
			.toggleClass('animation1in animation1out');
		$('#home-page .col-center > div:nth-child(2)')
			.toggleClass('animation2out animation2in');
		$('#home-page .col-center > div:nth-child(3)')
			.toggleClass('animation3out animation3in');

		$('#home-page .col-left > div:nth-child(1)')
			.toggleClass('animation4out animation4in');
		$('#home-page .col-left > div:nth-child(2)')
			.toggleClass('animation5out animation5in');
		$('#home-page .col-left > div:nth-child(3)')
			.toggleClass('animation6out animation6in');
	}

	function animateAbout () {
		$('#about-page .col-left > div:nth-child(1)')
			.toggleClass('animation2in animation2out');
		$('#about-page .col-left > div:nth-child(2)')
			.toggleClass('animation3in animation3out');
		$('#about-page .col-left > div:nth-child(3)')
			.toggleClass('animation2in animation2out');
		$('#about-page .col-center > div:nth-child(1)')
			.toggleClass('animation7in animation7out');
	}
*/


/*	$('nav a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    	$target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900);
	});
*/

/*	$('#show-home').click(function (event) {
		event.preventDefault();

		if (pageStatus != 1 && onWork == false) {
			onWork = true;
		
			$('#home-page').css('display', 'flex');

			animateHome();

			setTimeout(function () {
				//$('#about-page').css('display', 'none');
				//$('#contact-page').css('display', 'none');
				onWork = false;
				pageStatus = 1;
			}, 2000);

		}
	});
*/


/*	$('#show-about').click(function (event) {
		event.preventDefault();

		if (pageStatus != 2 && onWork == false) {
			onWork = true;

			//$('#about-page').css('display', 'flex');		
			//iconsPosition();

				$('html, body').stop().animate({
				    'scrollTop': $('#about-page').offset().top
				}, 1000);

			if (pageStatus == 1) {
				//animateHome();

				
			}

			//if ( $('#about-page .ab1').hasClass('animation2out') ) {
			//	animateAbout();
			//}
			
			setTimeout(function () {
				//$('#home-page').css('display', 'none');
				//$('#contact-page').css('display', 'none');
				onWork = false;
				pageStatus = 2;
			}, 2000);
		}
	});
*/

/*	$('#show-contact').click(function (event) {
		event.preventDefault();

		//$('html, body').animate({
		//   scrollTop: $("#contact-page").offset().top
		//}, 1000);
	});

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
				$('#about-page').css('display', 'none');
				onWork = false;
				pageStatus = 3;
			}, 2000);
		}
	});
*/
// =========================================

	//setTimeout(function () {
	//	$('#home-page').css('visibility', 'visible');
	//	//$('#home-page .my-name').addClass('animation4in');
	//}, 500);

	getNavMargin();
	iconsPosition();

	$(window).resize(function () {
		getNavMargin();
		iconsPosition();
	});




});
