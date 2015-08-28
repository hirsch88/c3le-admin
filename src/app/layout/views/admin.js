(function () {
  'use strict';

  angular
    .module('c3.layout.views.Admin', [])
    .config(StateConfig);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin', {
        views: {
          'root': {
            templateUrl: util.templateUrl('c3.layout.views.Admin')
          }
        }
      });
  }


}());
