AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////


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
    _headerScroll();
  };

  return {
    init: init,
  };
})();