/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.router {
  'use strict';

  // CLASS ////////////////////////////////////////////////////////////////////////
  class AppRouter {

    private stack: Array<any>;
    private previousState: any;

    constructor(private $state: ng.ui.IStateService,
                private $urlRouter: ng.ui.IUrlRouterService,
                private $rootScope: ng.IRootScopeService) {
    }

  }

  // FACTORY //////////////////////////////////////////////////////////////////////
  factory.$inject = [
    '$state', '$urlRouter', '$rootScope'
  ];

  function factory($state, $urlRouter, $rootScope) {
    return new AppRouter($state, $urlRouter, $rootScope);
  }

  // ANGULAR ///////////////////////////////////////////////////////////////////////
  angular
    .module(ID.Router, [])
    .factory(ID.Router, factory);

}
