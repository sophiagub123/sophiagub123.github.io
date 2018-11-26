define(function(require, exports, module) {
    var Http = require('U/http');
    // var header = _g.getTemplate('public/header');
    // var session_key = _g.getLS('session_key');
    // $('#header').html(template.compile(header)({
    //     type: 'normal',
    //     active: 0,
    //     session_key: _g.getLS('session_key'),
    // }));
    var header = require('U/header').init(3);
    var footer = _g.getTemplate('public/footer');
    $('#footer').html(template.compile(footer)({
        // type: 'normal',
    }));
    $('.ui-logout').on('click',function () {
        logout();
    });
    var banner = new Swiper('#advert', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true,
        galleryTop: true,
        galleryThumbs: true
    });
    var bannerOne = new Swiper('#bannerOne', {
        // pagination: '.swiper-pagination',
        slidesPerView: 2,
        spaceBetween: 30,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        // paginationClickable: true,
        autoplay: 2000,
        loop: true,
        galleryTop: true,
        galleryThumbs: true
    });
    var bannerTwo = new Swiper('#bannerTwo', {
        // pagination: '.swiper-pagination',
        slidesPerView: 2,
        spaceBetween: 30,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        // paginationClickable: true,
        autoplay: 2000,
        loop: true,
        galleryTop: true,
        galleryThumbs: true
    });
});