(function () {
  'use strict';

  angular
    .module('c3.core.configs.Router', [])
    .config(UiRouterConfig);

  function UiRouterConfig($urlRouterProvider){
    // when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');
  }

}());
