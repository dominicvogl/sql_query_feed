//
// Setup jQuery Plugins
//------------------------------------------------------------------------



$(document).ready(function() {

    //
    // Modernizr I: SVG Fallback
    //------------------------------------------------------------------------

    if(!Modernizr.svg) {

        $('img[src$="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }



    //
    // Slick Slider (https://github.com/kenwheeler/slick)
    //------------------------------------------------------------------------

    var slickSlider = $('.slick-slider');
    if(slickSlider.length) {
        slickSlider.slick({
            centerMode: true,
            centerPadding: '0px'
        });
    }

    var slickMultiSlider = $('.slick-multi-slider');
    if(slickMultiSlider.length) {
        slickMultiSlider.slick({
            infinite: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 2
        });
    }

});



$(window).load(function () {

    // Your awesome code

});