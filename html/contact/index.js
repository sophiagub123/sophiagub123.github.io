define(function(require, exports, module) {
  var Http = require('U/http');
  var header = require('U/header').init(4);
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
  var bannerActive = new Swiper('#bannerActive', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 3000,
      loop: false,
      galleryTop: true,
      galleryThumbs: true
  });
});