(function () {
  'use strict';

  angular
    .module('c3.core.constants.Global', [])
    .constant('$lodash', _)
    .constant('$moment', moment)
    .constant('$bluebird', Promise);

})();
