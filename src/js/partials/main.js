$('.scrollto').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 700,
		easing: "linear"
	});

	return false;
});

var screens_swiper = new Swiper(".screens__swiper", {
	slidesPerView: 1,
	navigation: {
		prevEl: ".prev-screen-arrow-inner",
		nextEl: ".next-screen-arrow-inner",
	},
	autoHeight: true,
	effect: 'fade',
	allowTouchMove: false,
	effect: "creative",
	creativeEffect: {
		prev: {
			translate: ["-20%", 0, 0],
		},
		next: {
			translate: ["20%", 0, 0],
		},
	},
	pagination: {
		el: ".screens-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			var num = index + 1
			return '<span class="' + className + '">' + ('0' + num) + "</span>";
		},
	},
	speed: 1500,
});


$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().prev().addClass('js-prev4');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().addClass('js-prev3');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().addClass('js-prev2');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().addClass('js-prev1');

$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().addClass('js-next1');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().addClass('js-next2');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().addClass('js-next3');
$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().next().addClass('js-next4');


screens_swiper.on('slideChange', function () {
	if (screens_swiper.activeIndex == 0 || screens_swiper.activeIndex == 2 || screens_swiper.activeIndex == 4) {
		$('body').addClass('js-light');
		$('body').removeClass('js-dark');
		
		$('body').addClass('js-light');
		$('body').removeClass('js-dark');
	} else if (screens_swiper.activeIndex == 1 || screens_swiper.activeIndex == 3) {
		$('body').addClass('js-dark');
		$('body').removeClass('js-light');
		
		$('body').addClass('js-dark');
		$('body').removeClass('js-light');
	}

	if (screens_swiper.activeIndex == 4) {
		$('.footer .footer__row-small-wrapper').slideUp(1500);
		$('.footer .footer__row-big-wrapper').slideDown(1500);
		$('.footer').addClass('js-active');
		$('.screens-arrow-inner.prev-screen-arrow-inner').show().addClass('js-active');
		$('.screens-arrow-inner.next-screen-arrow-inner').hide().addClass('js-active');
		
	} else {
		$('.footer .footer__row-small-wrapper').slideDown(1500);
		$('.footer .footer__row-big-wrapper').slideUp(1500);
		$('.footer').removeClass('js-active');
		$('.screens-arrow-inner.prev-screen-arrow-inner').hide().removeClass('js-active');
		$('.screens-arrow-inner.next-screen-arrow-inner').show().removeClass('js-active');
	}
	
	
	$('.swiper-pagination-bullet').removeClass('js-prev4');
	$('.swiper-pagination-bullet').removeClass('js-prev3');
	$('.swiper-pagination-bullet').removeClass('js-prev2');
	$('.swiper-pagination-bullet').removeClass('js-prev1');

	$('.swiper-pagination-bullet').removeClass('js-next1');
	$('.swiper-pagination-bullet').removeClass('js-next2');
	$('.swiper-pagination-bullet').removeClass('js-next3');
	$('.swiper-pagination-bullet').removeClass('js-next4');



	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().prev().addClass('js-prev4');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().prev().addClass('js-prev3');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().prev().addClass('js-prev2');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').prev().addClass('js-prev1');

	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().addClass('js-next1');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().addClass('js-next2');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().addClass('js-next3');
	$('.swiper-pagination-bullet.swiper-pagination-bullet-active').next().next().next().next().addClass('js-next4');

});




var header_screen1_btns = new Swiper(".header-screen1__btns", {
	slidesPerView: 'auto',
	watchSlidesProgress: true,
});
var header_screen1_search_wrapper = new Swiper(".header-screen1__search-wrapper", {
	thumbs: {
		swiper: header_screen1_btns,
	},
	effect: 'fade',
});


var screen3_swiper = new Swiper(".screen3__swiper", {
	slidesPerView: '4',
	navigation: {
		nextEl: ".screen3__swiper-arrow-next",
		prevEl: ".screen3__swiper-arrow-prev",
	}
});






var left_screen4_swiper = new Swiper(".left-screen4__swiper", {
	slidesPerView: '1',
	watchSlidesProgress: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".left-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-next",
		prevEl: ".left-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-prev",
	},
	breakpoints: {
		1025: {
			direction: "vertical",
			slidesPerView: '4',
		}
	}
});


var right_screen4_swiper = new Swiper(".right-screen4__swiper", {
	slidesPerView: '1',
	watchSlidesProgress: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".right-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-next",
		prevEl: ".right-screen4__swiper-wrapper .swiper-arrow.swiper-arrow-prev",
	},
	breakpoints: {
		1025: {
			direction: "vertical",
			slidesPerView: '4',
		}
	}
});


$(document).ready(function () {


	$(".body-screen1__image-name").click(function () {
		$(this).next().toggleClass('shown');
	});

	
	$(".item-screen2").hover(function () {
		var screen2__icon_enter = $(this)
		screen2__icon_enter.children('.item-screen2__icon').children('img').addClass('js-top1');
		setTimeout(function () {
			screen2__icon_enter.children('.item-screen2__icon').children('img').removeClass('js-top1');
			screen2__icon_enter.children('.item-screen2__icon').children('img').addClass('js-bottom1');
			setTimeout(function () {
				screen2__icon_enter.children('.item-screen2__icon').children('img').removeClass('js-bottom1');
				screen2__icon_enter.children('.item-screen2__icon').children('img').addClass('js-top2');
				setTimeout(function () {
					screen2__icon_enter.children('.item-screen2__icon').children('img').removeClass('js-top2');
					screen2__icon_enter.children('.item-screen2__icon').children('img').toggleClass('js-bottom2');
				}, 100);
			}, 100);
		}, 100);
	});
	/* $(".item-screen2").mouseout(function () {
		var screen2__icon_out = $(this)
		screen2__icon_out.children('.item-screen2__icon').children('div').removeClass('js-bottom2');
	}); */
	$(".item-screen2").hover(function () {
		var screen2__icon_enter = $(this)
		screen2__icon_enter.children('.item-screen2__icon').children('div').addClass('js-top1');
		setTimeout(function () {
			screen2__icon_enter.children('.item-screen2__icon').children('div').removeClass('js-top1');
			screen2__icon_enter.children('.item-screen2__icon').children('div').addClass('js-bottom1');
			setTimeout(function () {
				screen2__icon_enter.children('.item-screen2__icon').children('div').removeClass('js-bottom1');
				screen2__icon_enter.children('.item-screen2__icon').children('div').addClass('js-top2');
				setTimeout(function () {
					screen2__icon_enter.children('.item-screen2__icon').children('div').removeClass('js-top2');
					screen2__icon_enter.children('.item-screen2__icon').children('div').toggleClass('js-bottom2');
				}, 100);
			}, 100);
		}, 100);
	});
	/* $(".item-screen2").mouseout(function () {
		var screen2__icon_out = $(this)
		screen2__icon_out.children('.item-screen2__icon').children('div').removeClass('js-bottom2');
	}); */




	$('.screen5__btn').click(function() {
		$('.popup-screen5').addClass('js-active');
	});
	$('.popup-screen5__close').click(function() {
		$('.popup-screen5').removeClass('js-active');
	});
	$('.header__burder svg').click(function() {
		$(this).toggleClass('js-active');
		$('.header__menu').toggleClass('js-active');
	});



	$('.popup-screen5__input').focus(function() {
		$(this).addClass('js-active');
	});
	$('.popup-screen5__input').blur(function() {
		$(this).removeClass('js-active');
	});




	if ($(window).width() <= 1024) {
		screens_swiper.destroy();
		$('.screens__swiper').removeClass('swiper');
		$('.screens__swiper-wrapper').removeClass('swiper-wrapper');
		$('.screens__slide').removeClass('swiper-slide');

		screen3_swiper.destroy();
		$('.screen3__swiper').removeClass('swiper');
		$('.screen3__swiper-wrapper').removeClass('swiper-wrapper');
		$('.screen3__slide').removeClass('swiper-slide');

		$('.screen3__show-more-btn').on('click', function() {
			$('.screen3__slide:hidden').slice(0, 3).slideDown();
			if ($('.screen3__slide:hidden').length < 1) {
				$('.screen3__show-more-btn').slideUp()
			}
		});




		var cardImage = $('.card-screen4__image-mobile').html();
		$('.screen4__center-inner').html(cardImage);

		$(".card-screen4").click(function () {
			var cardImage = $(this).children('.card-screen4__image').html();
			$('.screen4__center-inner').html(cardImage);
		});


		$('.popup-screen5__btn').text('Оставить заявку');
	}


	if ($(window).width() > 1024) {
		$(".card-screen4").click(function () {
			$('.card-screen4').removeClass('js-active');
			$(this).addClass('js-active');
			$('.screen4__center').addClass('js-active');
			var cardImage = $(this).children('.card-screen4__image').html();
			$('.screen4__center-inner').html(cardImage);/* 
			$('.screen4__center-inner').removeClass('js-active'); */
			setTimeout(function () {
				$('.screen4__center-inner').addClass('js-active');
			}, 100);
		});


		$('.popup-screen5__input').keyup(function() {
			var empty = false;
			$('.popup-screen5__input').each(function() {
				if ($(this).val() === '') {
					empty = true;
				}
			});

			if (empty) {
				$('.popup-screen5__btn').removeClass('full').text('Данные не заполнены');
			} else {
				$('.popup-screen5__btn').addClass('full').text('Отправить');
			}
		});
	}

	
});







