AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiperBanner = new Swiper('.swiperBanner .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
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

  const _filter = () => {
    $(document).ready(function() {
      $('.fa-angle-down').click(function() {
      $('.filter-dropdown').toggle();
      })
      $("filter-dropdown").hover(function() {
        $('#dropdown-item').css("display", "block");
        }, function(){
        $('#dropdown-item').css("display", "none");
      });
    })
  }
 
const _headerScroll = () => {
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");
    }
    });
  });
}

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperReading();
    _filter();
    _headerScroll();
  };

  return {
    init: init,
  };
})();