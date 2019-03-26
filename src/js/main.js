;(function ($) {
    'use strict';
    
    $(function () {
        $('.main-slider').slick({
            infinite: true,
            slide: 'div',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 8000,
            focusOnSelect: true,//слайдится при клике
            // centerMode: true,
            prevArrow: '.slider-prev',
            nextArrow: '.slider-next',
            // centerPadding: '100px',//расстояние на которое вылазиет след слайд
        });
    });
/*
    $(function () {
        $('.slider').slick({
            infinite: true,
            slide: 'div',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 2000,
            //focusOnSelect: true,//слайдится при клике
            // centerMode: true,
            prevArrow: '.slider-prev',
            nextArrow: '.slider-next',
            // centerPadding: '100px',//расстояние на которое вылазиет след слайд
        });
    })*/

    $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
})(jQuery);


function initMap() {
    // The location of Uluru
    var uluru = {lat: 49.9323562, lng: 36.4106879};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
