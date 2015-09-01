/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.views {
  'use strict';


  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('public.login', {
        url: '/auth/login',
        views: {
          'content': {
            templateUrl: 'app/auth/views/login.html',
            controller: ID.LoginController,
            controllerAs: 'vm'
          }
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class LoginController extends core.util.ViewController {


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler
    ];

    constructor($scope, eventHandler) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      ;
    }

    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////


  }

  angular
    .module(ID.Login, [])
    .config(stateConfig)
    .controller(ID.LoginController, LoginController);
}
