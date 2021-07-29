AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////

<<<<<<< HEAD

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
=======
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
>>>>>>> 4baf959 (section reading)

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
<<<<<<< HEAD
    _headerScroll();
=======
    _privateMethod();
    _swiperReading();
    _filter();
>>>>>>> 4baf959 (section reading)
  };

  return {
    init: init,
  };
})();