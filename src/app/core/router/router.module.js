(function () {
  'use strict';

  angular
    .module('c3.core.router', [
      'ui.router',
      'ui.router.router',
      'ui.router.state',
      'c3.core.router.Start',
      'c3.core.router.Destination',
      'c3.core.router.Layer',
      'c3.core.router.Router'
    ]);

})();
