AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
    const swiperBanner = new Swiper('.swiperBanner .swiper-container', {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
      },
      spaceBetween: 0,
      freeMOde: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        767:{
          slidesPerView: 1,
          spaceBetween: 0
        },
        991:{
          slidesPerView: 1
        },
        1199:{
          slidesPerView: 1
        }
      }
    });
  };

  const _swiperReading = () => {
    // private stuff

    const swiperReading = new Swiper('.swiperReading .swiper-container', {
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
    _toggle();
  };

  return {
    init: init,
  };
})();