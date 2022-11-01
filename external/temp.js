

$(document).ready(function() {
    $('.timeline-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000
        responsive: [

            {
                breakpoint: 710,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.timeline-slider').on('afterChange', function(e, slick, currentSlide) {
        // let countYearItem = $('.timeline-yaer-item').length - 1;
         $('.timeline-yaer-item_act').removeClass('timeline-yaer-item_act');
        $('.timeline-yaer-item').eq(currentSlide).addClass('timeline-yaer-item_act');
    });

    $('.timeline-yaer-item').on('click', function () {
        let id = $(this).data('slide');

        $('.timeline-slider').slick('slickGoTo', id);
        return false;
    })
})

$(document).ready(function() {
    $('.action-slider').each(function() {
        $(this).slick({
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000
        });

    });
})




$(document).ready(function() {
    $('.js--mob-article-grid').each(function() {
        if ($(window).width() <= 1024) {
            $(".is--tr-header").remove();
            $(this).slick({
                arrows: true,
                dots: false,
                variableWidth: true,
                infinite: true,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    }
                ]
            });
        }
    });
})


$(document).ready(function() {

    $('.article-tiles-slider').each(function() {
        $(this).slick({
            arrows: true,
            dots: false,
            infinite: true,
            variableWidth: true,
            slidesToScroll: 1,
            prevArrow: $(this).prev('.article-slider-arrow').find('.article-slider-arrow-prev'),
            nextArrow: $(this).prev('.article-slider-arrow').find('.article-slider-arrow-next'),
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });

    });


    $('.article-slider').each(function() {
        $(this).slick({
            arrows: true,
            dots: false,
            variableWidth: true,
            infinite: false,
            slidesToScroll: 1,
            prevArrow: $(this).prev('.article-slider-arrow').find('.article-slider-arrow-prev'),
            nextArrow: $(this).prev('.article-slider-arrow').find('.article-slider-arrow-next'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false
                    }
                }
            ]
        });

    })

})





// $(document).ready(function() {
//     $('.js--goods-section-toggle').on('click', function() {
//         let $wrap = $(this).closest('.goods-toggle-section');
//
//         if ($wrap.hasClass('goods-toggle-section_open')) {
//             $wrap.removeClass('goods-toggle-section_open');
//             $wrap.find('.goods-toggle-section__body').slideUp();
//         } else {
//             $wrap.addClass('goods-toggle-section_open');
//             $wrap.find('.goods-toggle-section__body').slideDown();
//         }
//         return false;
//     });
//
// })




$(document).ready(function() {
    $('.aside-menu-toogle').on('click', function() {
        $(this).closest('.aside-menu__item').toggleClass('aside-menu__item_open');
        return false;
    });
    $('.js-lk-menu-mobile-btn').on('click', function() {
        $('.lk-menu-mobile-toggle').toggle();
        return false;
    });
})

$(document).ready(function() {
    // $('.amount-buy-btn').on('click', function () {
    //     $(this).closest('.amount').toggleClass('amount_open');
    //     return false;
    // });
})



// $(document).ready(function() {
//     $('.aside-nav-section__title').on('click', function() {
//         $(this).parent().toggleClass('aside-nav-section_open');
//         return false;
//     });
// })

$(document).ready(function() {
    $('.js--aside-nav-mobile').on('click', function() {
        $(this).toggleClass('is--open');
        $('.aside-nav').toggleClass('is--open');
        return false;
    });

})








// .grid scripts goes here 

/*$(function() {
	
});*/
$(document).ready(function () {
    $('.js--mob-nav-open').on('click', function() {
        $('.header-mobile__btn').toggleClass('is--open');
        $('.wrap-mobile-menu').toggle();
        $('body').toggleClass('is--lock');
        $('html').toggleClass('is--lock');
        return false;
    });
    $('.js--mob-nav-close').on('click', function() {
        $('.header-mobile__btn').toggleClass('is--open');
        $('.wrap-mobile-menu').toggle();
        $('body').removeClass('is--lock');
        $('html').removeClass('is--lock');
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 46) {
            $('.header-bottom').addClass('header-bottom_sticky');
        } else {
            $('.header-bottom').removeClass('header-bottom_sticky');
        }
    });
    $('.js--mobile-catalog-close').on('click', function() {
        $('.wrap-mobile-catalog-nav').toggleClass('is--open');
        return false;
    });

    $('.js--mobile-catalog-open').on('click', function() {
        $('.wrap-mobile-catalog-nav').toggleClass('is--open');
        return false;
    });

});







$(document).ready(function() {
    $('.js-client-number').mask('+7 (000) 000-00-00', {
            placeholder: "+7 (000) 000-00-00"
        }
    );
})




$(document).ready(function() {
    $('.main-slider-body').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        prevArrow: $('.main-slider-arrow-prev'),
        nextArrow: $('.main-slider-arrow-next'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
})



$(document).ready(function() {
    let mainNavTimeout = null;

        $('.main-nav-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            swipeToSlide: false,
            swipe: true,
        });




    $('.main-nav-btn').on('click', function () {
        if($(this).hasClass('main-nav-btn_open')) {
            $(this).removeClass('main-nav-btn_open');
            $('.wrap-main-nav').hide();
            $('body').removeClass('overlay-nav');
        } else{
            $(this).addClass('main-nav-btn_open');
            $('.wrap-main-nav').show();
            if ($('.main-nav-slider').length) {
                $('.main-nav-slider').slick('slickSetOption', {}, true);
            }
            $('body').addClass('overlay-nav');
        }
        return false;
    });

    $(document).mouseup(function (e){
        if (!$('.wrap-main-nav').is(e.target)
            && $('.wrap-main-nav').has(e.target).length === 0
            && $(e.target).closest('.wrap-main-nav-btn').length === 0) {

            $('.main-nav-btn').removeClass('main-nav-btn_open');
            $('.wrap-main-nav').hide();
            $('body').removeClass('overlay-nav');
        }
    });


    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            if($('.main-nav-btn').hasClass('main-nav-btn_open')) {
                $('.main-nav-btn').removeClass('main-nav-btn_open');
                $('.wrap-main-nav').hide();
                $('body').removeClass('overlay-nav');
            }
        }
    });

    $('.mobile-catalog-nav-section__title').not('.is--no-dropdown').on('click', function () {
        $(this).closest('.mobile-catalog-nav-section').toggleClass('is--open')
        return false;
    })

    //
    // $('.js--mobile-catalog-nav-open').on('click', function() {
    //     if ($(this).parent().hasClass('mobile-catalog-nav__item_open')) {
    //         $(this).parent().removeClass('mobile-catalog-nav__item_open');
    //         $(this).next('.mobile-catalog-nav__dropdown').slideUp();
    //     } else {
    //         $(this).parent().addClass('mobile-catalog-nav__item_open');
    //         $(this).next('.mobile-catalog-nav__dropdown').slideDown();
    //     }
    //     return false;
    // });
    // $('.main-nav-mobile-btn').on('click', function() {
    //     if ($('.mobile-catalog-nav').is(':visible')) {
    //         $('.mobile-catalog-nav').slideUp();
    //     } else {
    //         $('.mobile-catalog-nav').slideDown();
    //     }
    //
    //     return false;
    // });



})








// $(document).ready(function() {
//
//     $('.js--pager-sort-dropdown').off('click');
//     $('.js--pager-sort-dropdown').on('click', function() {
//         $(this).next('.pager-sort-dropdown').toggle();
//         $(this).toggleClass('pager-toolbar-sort__link_open');
//         return false;
//     });
//
//     $(document).mouseup(function (e){
//         var div = $('.pager-toolbar-sort');
//         if (!div.is(e.target)
//             && div.has(e.target).length === 0) {
//             $('.js--pager-sort-dropdown').removeClass('pager-toolbar-sort__link_open');
//             $('.pager-sort-dropdown').hide();
//         } else {
//             return false;
//         }
//     });
// })



// .search-pane scripts goes here 

/*$(function() {
	
});*/

$(document).ready(function() {
    $('.js--tabs-head-item__link').on('click', function() {
        let id = $(this).attr('href');
        let $tabsWrap = $(this).closest('.tabs');
        $tabsWrap.find('.tabs-head-item__act').removeClass('tabs-head-item__act');
        $(this).parent().addClass('tabs-head-item__act');
        $tabsWrap.find('.tabs-item').hide();
        // $(id).show();
        if ($(id).find('.catalog-slider').length) {
            $(id).show(100, function () {
                if ($(id).find('.catalog-slider').length) {
                    $(id).find('.catalog-slider').slick('slickSetOption', {}, true);
                }
            });
        } else {
            $(id).show();
        }
        return false;
    });

})

$(document).ready(function() {
    $('.js-up-btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.up-btn').show();
        } else {
            $('.up-btn').hide();
        }
    });
});








class CSeriesTable{

    static init() {

    if ($(window).width() < 767) {
        $(".is--tr-header").remove();
        $('.js--catalog-series-table tbody').each(function() {

                if($(this).hasClass('slick-initialized')){
                    return true;
                }

            $(this).slick({
                arrows: true,
                dots: false,
                infinite: true,
                variableWidth: true,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    }
                ]
            });

        })

        }

    }

    }


$(document).ready(function() {
    CSeriesTable.init();
})

$(document).ready(function() {

    $('.catalog-slider').each(function() {

        /**
         * не всегда нужна бесконечная прокрутка, в комплектации это смотрится странно, когда всего два товара в комплекте
         */
        let countSlides = $(this).find('.catalog-slider-item').length;


        $(this).slick({
            arrows: true,
            dots: false,
            infinite: (countSlides>3)?true:false,
            variableWidth: true,
            slidesToScroll: 1,
            prevArrow: $(this).prev('.catalog-slider-arrow').find('.catalog-slider-arrow-prev'),
            nextArrow: $(this).prev('.catalog-slider-arrow').find('.catalog-slider-arrow-next'),
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToScroll: 1,
                        infinite: (countSlides>3)?true:false,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToScroll: 1,
                        infinite: (countSlides>1)?true:false,
                        arrows: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        infinite: true,
                    }
                }
            ]
        });

    })

})

$(document).ready(function() {
    if ($(window).width() <= 767) {
        $('.js--order-detail-table-slider').each(function() {
            $(".is--tr-header").remove();
            $(this).slick({
                arrows: true,
                dots: false,
                infinite: true,
                variableWidth: true,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    }
                ]
            });

        })


    }
})


/*
перенесено в js проекта
*/

$(document).ready(function() {
    $('.filter-catalog-toogle').on('click', function() {
        $(this).closest('.filter-catalog__item').toggleClass('filter-catalog__item_open');
        return false;
    });

})


/*
перенечено в проект
*/





// $(document).ready(function() {
//     $('.js--checkout-comment-toggle').on('click', function() {
//         $(this).toggleClass('is--active');
//         $(this).next('.checkout-list-item-comment__textarea').toggle();
//         return false;
//     });
//
// })


// $(document).ready(function() {
//     $('.checkout-select-addres .field-input-select').change(function() {
//         $('.checkout-select-addres-toggle').toggle();
//     })
//
//     $( ".js-datepicker" ).datepicker( {
//         dateFormat: 'd MM yy',
//         regional: 'ru'
//     });
// })
//

$(document).ready(function() {
    mobileSummaryShow()
    $(window).scroll(function () {
        mobileSummaryShow()
    });
    function mobileSummaryShow() {
        let wWidth = $(window).width();
        if ($('.cart-page-aside').length) {
            if (wWidth < 1025 && $(window).scrollTop() + wWidth >  $('.cart-page-aside').offset().top) {
                $('.cart-summary-mobile').addClass('is--hidden');
            } else {
                $('.cart-summary-mobile').removeClass('is--hidden');
            }
        }
    }
})







$(document).ready(function() {
    $('.js--filter-inline-toggle').on('click', function() {
        $(this).closest('.filter-inline').toggleClass('is--open');
        return false;
    });

})

// $(document).ready(function() {
//     $('.lk-filter-head__toggle').on('click', function() {
//         $(this).toggleClass('is--open');
//         $(this).closest('.lk-filter').find('.lk-filter-body').toggle();
//         return false;
//     });
//
// })








$(document).ready(function() {
    $('.personal-nav').on('mouseenter', function() {
        $('body').addClass('overlay');
    });
    $('.personal-nav').on('mouseleave', function() {
        $('body').removeClass('overlay');
    });
})





$(document).ready(function() {
    $('.brand-slider').each(function() {
         $(this).slick({
             arrows: true,
             dots: false,
             infinite: true,
             variableWidth: true,
             slidesToScroll: 1,
             prevArrow: $(this).prev('.brand-slider-arrow').find('.brand-slider-arrow-prev'),
             nextArrow: $(this).prev('.brand-slider-arrow').find('.brand-slider-arrow-next'),
             responsive: [
                 {
                     breakpoint: 1023,
                     settings: {
                         slidesToScroll: 1,
                     }
                 },
                 {
                     breakpoint: 780,
                     settings: {
                         slidesToScroll: 1,
                         arrows: false,
                         dots: false
                     }
                 },
                 {
                     breakpoint: 600,
                     settings: {
                         slidesToScroll: 1,
                         arrows: false,
                         dots: false
                     }
                 }
             ]
         });
    })
})



$(document).ready(function() {
    $('.privilege-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.privilege-slider').on('afterChange', function(e, slick, currentSlide) {
        $('.privilege-slider-nav-item__act').removeClass('privilege-slider-nav-item__act');
        $('.privilege-slider-nav-item').eq(currentSlide).addClass('privilege-slider-nav-item__act');
    });

    $('.privilege-slider-nav-item__link').on('click', function () {
        let id = $(this).data('slide');
        $('.privilege-slider-nav-item__act').removeClass('privilege-slider-nav-item__act');
        $(this).parent().addClass('privilege-slider-nav-item__act');
        $('.privilege-slider').slick('slickGoTo', id);
        return false;
    })
})





// $(document).ready(function() {
//     $('.js--order-list-table-reaet').on('click', function(e) {
//          e.stopPropagation();
//          e.preventDefault();
//          alert('1');
//
//     });
//     $('.js--order-list-table-detail').on('click', function(e) {
//         e.stopPropagation();
//         e.preventDefault();
//         alert('3');
//
//     });
//
// })


$(document).ready(function() {

    if ($(window).width() < 767) {
        $(".order-list-table-head").remove();
        $('.order-list-table_lk').each(function() {
            $(this).slick({
                arrows: true,
                dots: false,
                infinite: true,
                variableWidth: true,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                    }
                ]
            });

        })


    }

    $('.js-datepicker').daterangepicker({

        applyButtonClasses: 'btn',
        cancelButtonClasses: 'btn btn_border btn_border-blue' ,
        "locale": {
            "format": "DD.MM.YYYY",
            "separator": " - ",
            "applyLabel": "Применить",
            "cancelLabel": "Очистить",
            "fromLabel": "От",
            "toLabel": "До",
            "customRangeLabel": "Custom",
            "weekLabel": "Н",
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        },
    });
})

$(document).ready(function() {
    $('.faq-accordion-item__title a').on('click', function() {
        let $wrapper = $(this).closest('.faq-accordion-item');
        $wrapper.toggleClass('faq-accordion-item_open');
        return false;
    });

})




$(document).ready(function() {
    $('.product-card-img-slider').on('init', function(event, slick, direction){
        if (slick.slideCount <= slick.options.slidesToShow) {
            $(this).find('.slick-dots').hide();
        }
    });
    $('.product-card-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.product-card-img-slider-prev'),
        nextArrow: $('.product-card-img-slider-next'),
        fade: true,
        swipeToSlide: false,
        swipe: true,
        touchMove: false,
    });
})



