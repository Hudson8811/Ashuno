AOS.init();
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



$(document).ready(function (){
    let screens_swiper = new Swiper(".screens__swiper", {
        slidesPerView: 1,
        navigation: {
            prevEl: ".prev-screen-arrow-inner",
            nextEl: ".next-screen-arrow-inner",
        },
        autoHeight: true,
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
                let num = index + 1
                return '<span class="' + className + '">' + ('0' + num) + "</span>";
            },
        },
        speed: 1500,
        mousewheel: false,
        preventInteractionOnTransition: true
    });



    let screen3_swiper = new Swiper(".screen3__swiper", {
        slidesPerView: '4',
        navigation: {
            nextEl: ".screen3__swiper-arrow-next",
            prevEl: ".screen3__swiper-arrow-prev",
        },
        mousewheel: false,
        preventInteractionOnTransition: true,
        breakpoints: {
            1024: {
                allowTouchMove: false,
            }
        }
    });

    bulletClassChange();


    let disableScroll = true;
    setTimeout(function (){
        disableScroll = false;
    },4000);

    screens_swiper.on('slideChangeTransitionStart', function () {
        disableScroll = true;
    });
    screens_swiper.on('slideChangeTransitionEnd', function () {
        disableScroll = false;
    });
    screens_swiper.on('slideChange', function () {
        if (screens_swiper.activeIndex === 0 || screens_swiper.activeIndex === 2 || screens_swiper.activeIndex === 4) {
            $('body').removeClass('js-dark').addClass('js-light');
        } else if (screens_swiper.activeIndex === 1 || screens_swiper.activeIndex === 3) {
            $('body').removeClass('js-light').addClass('js-dark');
        }
        if (screens_swiper.activeIndex === 2) {
            $('body').addClass('screen-active3');
        } else {
            $('body').removeClass('screen-active3');
        }

        if (screens_swiper.activeIndex === 4) {
            $('.screens-arrow-inner.prev-screen-arrow-inner').show().addClass('js-active');
            $('.screens-arrow-inner.next-screen-arrow-inner').hide().addClass('js-active');
            setTimeout(function(){
                $('.footer').addClass('js-active');
                $('.footer .footer__row-small-wrapper').slideUp(1500);
                $('.footer .footer__row-big-wrapper').slideDown(1500);
            }, 0);

        } else {
            $('.screens-arrow-inner.prev-screen-arrow-inner').hide().removeClass('js-active');
            $('.screens-arrow-inner.next-screen-arrow-inner').show().removeClass('js-active');
            setTimeout(function(){
                $('.footer').removeClass('js-active');
                $('.footer .footer__row-small-wrapper').slideDown(1500);
                $('.footer .footer__row-big-wrapper').slideUp(1500);
            }, 0);
        }

        bulletClassChange();
    });



    let scrollCount = 0;

    $(document).on('mousewheel wheel', function(event) {
        if ($(window).width() > 1024 && screens_swiper instanceof Swiper) {
            if(scrollCount === 0 && !disableScroll){
                scrollCount++;

                let activeSection = screens_swiper.activeIndex;

                if (event.originalEvent.deltaY > 0) {
                    //down
                    switch (activeSection){
                        case 0:
                        case 1:
                        case 3:
                            screens_swiper.slideNext();
                            break;
                        case 2:
                            if (screen3_swiper.isEnd) {
                                screens_swiper.slideNext();
                            } else {
                                screen3_swiper.slideNext()
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    //up
                    switch (activeSection){
                        case 1:
                        case 3:
                        case 4:
                            screens_swiper.slidePrev();
                            break;
                        case 2:
                            if (screen3_swiper.isBeginning) {
                                screens_swiper.slidePrev();
                            } else {
                                screen3_swiper.slidePrev()
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                scrollCount = 0;
            }, 50));
        }
    });



    let header_screen1_btns = new Swiper(".header-screen1__btns", {
        slidesPerView: 'auto',
        watchSlidesProgress: true,
    });
    let header_screen1_search_wrapper = new Swiper(".header-screen1__search-wrapper", {
        thumbs: {
            swiper: header_screen1_btns,
        },
        effect: 'fade',
    });



    let left_screen4_swiper = new Swiper(".left-screen4__swiper", {
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
                slidesPerView: '3',
            }
        }
    });
    let right_screen4_swiper = new Swiper(".right-screen4__swiper", {
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
                slidesPerView: '3',
            }
        }
    });



    $(".body-screen1__image-name").hover(function () {
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

        let cardImage = $('.card-screen4__image-mobile').html();
        $('.screen4__center-inner').html(cardImage);

        $(".right-screen4__swiper .card-screen4").click(function () {
            let cardImage = $(this).children('.card-screen4__image').html();
            $('.screen4__center-inner').html(cardImage);
        });

        $('.popup-screen5__btn').text('Оставить заявку');
    } else {
        $(".right-screen4__swiper .card-screen4").click(function () {
            $('.right-screen4__swiper .card-screen4').removeClass('js-active hidden-before hidden-after');
            $(this).addClass('js-active');
            $(this).parent().prev().children('.card-screen4').addClass('hidden-after');
            $(this).parent().next().children('.card-screen4').addClass('hidden-before');
            $('.screen4__center').addClass('js-active');
            let cardImage = $(this).children('.card-screen4__image').html();
            $('.screen4__center-inner').html(cardImage);
            setTimeout(function () {
                $('.screen4__center-inner').addClass('js-active');
            }, 100);
        });

        $('.popup-screen5.class-desktop .popup-screen5__input').keyup(function() {
            let empty = true;
            $('.popup-screen5.class-desktop .popup-screen5__input').each(function() {
                if ($(this).val() === '') {
                    empty = false;
                    return false
                }
            });

            if (empty) {
                $('.popup-screen5.class-desktop .popup-screen5__btn').addClass('full').text('Отправить');
            } else {
                $('.popup-screen5.class-desktop .popup-screen5__btn').removeClass('full').text('Данные не заполнены');
            }
        });
    }




    function bulletClassChange(){
        $('.swiper-pagination-bullet').removeClass('js-prev1 js-prev2 js-prev3 js-prev4 js-next1 js-next2 js-next3 js-next4');

        let activeBullet = $('.swiper-pagination-bullet.swiper-pagination-bullet-active');

        activeBullet.prev().prev().prev().prev().addClass('js-prev4');
        activeBullet.prev().prev().prev().addClass('js-prev3');
        activeBullet.prev().prev().addClass('js-prev2');
        activeBullet.prev().addClass('js-prev1');
        activeBullet.next().addClass('js-next1');
        activeBullet.next().next().addClass('js-next2');
        activeBullet.next().next().next().addClass('js-next3');
        activeBullet.next().next().next().next().addClass('js-next4');
    }
});






















