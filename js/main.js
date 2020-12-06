$('.events_carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});