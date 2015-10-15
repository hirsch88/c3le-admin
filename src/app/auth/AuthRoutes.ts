/// <reference path="../../../typings/tsd.d.ts" />

module c3.auth {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var AuthRoutes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('public.signin', {
        url: '/auth/signin',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(controllers.ID.AuthSignInController),
            controller: controllers.ID.AuthSignInController,
            controllerAs: 'vm'
          }
        }
      });
  };
  AuthRoutes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
    .config(AuthRoutes);
}


