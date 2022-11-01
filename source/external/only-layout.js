$(document).ready(function() {
    $('.catalog-table-slider').slick({
        dots: false,
        arrow: true,
        prevArrow: $('.catalog-table-slider-prev'),
        nextArrow: $('.catalog-table-slider-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
})
