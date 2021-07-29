AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiperBanner = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };
  const _swiperReading = () => {
    // private stuff

    const swiperReading = new Swiper('.swiper-reading', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  };

  const _filter = () => {
    $(document).ready(function(){
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

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperReading();
    _filter();
  };

  return {
    init: init,
  };
})();