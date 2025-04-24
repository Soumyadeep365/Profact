$(document).ready(function() {
    console.log("hello world")
    $('.slider-box').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false
    });
});
