(function () {
  'use strict';

  angular
    .module('c3.layout.views.Public', [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('public', {
        views: {
          'root': {
            templateUrl: util.templateUrl('c3.layout.views.Public')
          }
        }
      });
  }


}());
