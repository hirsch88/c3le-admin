/**
 * Bootstrap
 * -----------------------
 * Loads the config.json and creates a angular constant out of it
 */

/// <reference path="../../typings/tsd.d.ts"/>
((): void => {
  'use strict';

  var $injector = angular.injector(['ng']);
  var $http = $injector.get('$http');
  $http.get('assets/configs/config.json').then((response) => {
      angular
        .module(c3.core.config.ID.AppConfig, [])
        .constant(c3.core.config.ID.AppConfig, response.data);

      angular.element(document).ready(() => {
        angular.bootstrap(document, ['c3']);
      });
    }
  );

})();
