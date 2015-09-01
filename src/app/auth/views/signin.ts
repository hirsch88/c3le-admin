/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.views {
  'use strict';


  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('public.signin', {
        url: '/auth/signin',
        views: {
          'content': {
            templateUrl: 'app/auth/views/signin.html',
            controller: ID.SignInController,
            controllerAs: 'vm'
          }
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class SignInController extends core.util.ViewController {


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
    .module(ID.SignIn, [])
    .config(stateConfig)
    .controller(ID.SignInController, SignInController);
}
