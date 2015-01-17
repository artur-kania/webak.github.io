/* wow.min.js */
/* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);



/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():a[b]=c()}(this,"verge",function(){function a(){return{width:k(),height:l()}}function b(a,b){var c={};return b=+b||0,c.width=(c.right=a.right+b)-(c.left=a.left-b),c.height=(c.bottom=a.bottom+b)-(c.top=a.top-b),c}function c(a,c){return a=a&&!a.nodeType?a[0]:a,a&&1===a.nodeType?b(a.getBoundingClientRect(),c):!1}function d(b){b=null==b?a():1===b.nodeType?c(b):b;var d=b.height,e=b.width;return d="function"==typeof d?d.call(b):d,e="function"==typeof e?e.call(b):e,e/d}var e={},f="undefined"!=typeof window&&window,g="undefined"!=typeof document&&document,h=g&&g.documentElement,i=f.matchMedia||f.msMatchMedia,j=i?function(a){return!!i.call(f,a).matches}:function(){return!1},k=e.viewportW=function(){var a=h.clientWidth,b=f.innerWidth;return b>a?b:a},l=e.viewportH=function(){var a=h.clientHeight,b=f.innerHeight;return b>a?b:a};return e.mq=j,e.matchMedia=i?function(){return i.apply(f,arguments)}:function(){return{}},e.viewport=a,e.scrollX=function(){return f.pageXOffset||h.scrollLeft},e.scrollY=function(){return f.pageYOffset||h.scrollTop},e.rectangle=c,e.aspect=d,e.inX=function(a,b){var d=c(a,b);return!!d&&d.right>=0&&d.left<=k()},e.inY=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.top<=l()},e.inViewport=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.right>=0&&d.top<=l()&&d.left<=k()},e});

// ************************************** //

var ARTUR = {};

ARTUR = {
	options : {
		offsetTop : 0,	// obecny offsett
		speed : 900,
		easingType : 'swing',
		currentPage : 0	// index obecnej strony
	},

	init : function () {
		this.scrollTo();
		this.menu.init();
	},
	
	scrollTo : function () {
		$.fn.extend({						// to provide chaining .scrollTo();
			scrollTo : function () {
				return this.each(function () {
					var target = $(this).offset().top;
					//ARTUR.options.offsetTop = target;
					$('html, body').stop().animate({
						'scrollTop': target
					}, ARTUR.options.speed, ARTUR.options.easingType);
				});
			}
		});
	},

	menu : {			// navigation and keyArrows
		init : function () {
			this.mainNavigation();
			this.goToHome();
			this.toggleByArrow();
			this.showNavigation.showMenu();
			this.scrollDetection();
			this.setNavHoverColor();
			this.setActiveClass();
		},

		mainNavigation : function () {
			var link = $('nav li a');

			link.click(function (e) {			
				var clickedLink = link.index($(this));
				e.preventDefault();
				switch (clickedLink) {
					case 0:
						$('#home').scrollTo();
						break;
					case 1:
						$('#about').scrollTo();
						break;
					case 2:
						$('#education').scrollTo();
						break;
					case 3:
						$('#experience').scrollTo();
						break;
					case 4:
						$('#contact').scrollTo();
						break;
				}
			});
		},

		goToHome : function () {
			$('header #gohome').click(function (e) {
				e.preventDefault();
				$('#home').scrollTo();
			});
		},

		toggleByArrow : function () {
			var links = $('nav li a'),
				numberOfPages = $('.full-page').length,
				buttons = [37, 38, 39, 40];

			$(document)
				.keydown(function (e) {
					var keycode = e.which;

					if ($.inArray(keycode, buttons) !=-1) {
						e.preventDefault();
						console.log('kyekode: '+ keycode);
					}

					switch (keycode) {
						case 38: //up
							if ((ARTUR.options.currentPage - 1) >= 0) {
								//ARTUR.options.currentPage--;
								links.eq(ARTUR.options.currentPage - 1).click();
								$('#keyUp').addClass('active');
							}			
							break;
						case 40: //down
							if ((ARTUR.options.currentPage + 1) < numberOfPages) {
								//ARTUR.options.currentPage++;
								links.eq(ARTUR.options.currentPage + 1).click();
								$('#keyDown').addClass('active');
							}				
							break;
					}

					//console.log('current page ' + ARTUR.options.currentPage);
					//console.log('current offset: ' + ARTUR.options.offsetTop);
				})

				.keyup(function () {
					setTimeout( function () {
						$('#keys .active').removeClass('active');
					}, ARTUR.options.speed);
				});			
		},

		showNavigation : {
			hideMenu : function () {
				$('#navigation').removeClass('menu-open');
			},

			showMenu : function () {
				var nav = $("#navigation")
					navTrigger = $('#menu-trigger span');

				navTrigger.click(function (e) {
					e.preventDefault();
					nav.addClass('menu-open');
				});

				$('.full-page, nav').click(function () {
					setTimeout(ARTUR.menu.showNavigation.hideMenu, 300);
				});
			}
		},

		getCurrentPosition : function () {
			var pageIndex = 0,
				pages = $('.full-page'),
				i = 0;

			for (i; i < pages.length; i++) {
				if (pages.eq(i).offset().top <= ARTUR.options.offsetTop) {
					pageIndex = i;
				}
			}

			if (ARTUR.options.currentPage != pageIndex) {
				ARTUR.options.currentPage = pageIndex;
			}
		},

		scrollDetection : function () {
			$(window).scroll(scrollDetection);

			function scrollDetection () {
				ARTUR.options.offsetTop = $(window).scrollTop();
				ARTUR.menu.getCurrentPosition();
				ARTUR.menu.setNavHoverColor();
				ARTUR.menu.setActiveClass();

				console.log('offset: ' + ARTUR.options.offsetTop);
				console.log('currentPage: ' + ARTUR.options.currentPage);
			}
		},

		setNavHoverColor : function () {
			var navElem = $('nav li a'),
				bgColors = ['#2980b9', '#f8823c', '#c0392b', '#9b59b6', '#2c5379'];

			navElem.hover(
				function () {
					$(this).css({ backgroundColor : bgColors[ARTUR.options.currentPage]});
				},
				function () {
					$(this).css({ backgroundColor : '#ffffff'});
				}
			);
		},

		setActiveClass : function () {
			var navElem = $('nav li a');

			navElem.css({ backgroundColor: '#ffffff'});
			navElem.eq(ARTUR.options.currentPage).css({ backgroundColor: '#e7e7e7'});
		}
	}
};


$(document).ready(function () {
	ARTUR.init();
	new WOW().init();
});