AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  // const _desktopLanguageoption = () => {
  //   $(document).ready(function() {
  //     $('.fa-angle-down').click(function(){
  //     $('.language-dropdown').toggle();
  //     })
  //   });
  // }

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _desktopLanguageoption();
  };

  return {
    init: init,
  };
})();
