/// <reference path="../../typings/tsd.d.ts"/>

module c3 {
  'use strict';

  angular
    .module('c3', [
      // AngularJS Libs
      'ngSanitize',
      'ngMessages',
      'ngAnimate',

      // Third-Party Libs
      'pascalprecht.translate',
      'ui.router',
      'angular-loading-bar',

      // Configs, middleware, run...
      'c3.core',

      // Common components, services, filters...

      // App modules with business logic
      'c3.layout',
      'c3.auth',
      //'c3.home',
      'c3.event'
    ]);
}
