AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiperBanner = new Swiper('.swiperBanner', '.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  const _swiperReading = () => {
    // private stuff

    const swiperReading = new Swiper('.swiperReading ',  '.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };
 
const _headerScroll = () => {
  jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > 1){  
        jQuery('header').addClass("sticky");
      }
      else{
        jQuery('header').removeClass("sticky");
      }
      });
    });
};

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperReading();
    _headerScroll();
  };

  return {
    init: init,
  };
})();