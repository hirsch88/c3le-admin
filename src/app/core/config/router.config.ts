/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {
  'use strict';

  /**
   * Router Config
   *
   * @desc Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   *
   * @constructor
   */
  var RouterConfig = ($urlRouterProvider) => {
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');
  };
  RouterConfig.$inject = ['$urlRouterProvider'];


  angular
    .module(config.ID.Router, [
      'ui.router'
    ])
    .config(RouterConfig);

}

