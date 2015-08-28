(function () {
  'use strict';

  angular
    .module('c3', [

      // AngularJS Libs
      'ngSanitize',
      'ngMessages',

      // Third-Party Libs
      'ui.router',
      'pascalprecht.translate',

      // Configs, middleware, run...
      'c3.core',

      // Common components, services, filters...

      // App modules with business logic
      'c3.layout',
      'c3.home'

    ]);

}());
