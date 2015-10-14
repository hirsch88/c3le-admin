/// <reference path="../../../typings/tsd.d.ts" />

module c3.auth {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('public.signin', {
        url: '/auth/signin',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(views.ID.SignIn),
            controller: views.ID.SignInController,
            controllerAs: 'vm'
          }
        }
      });
  };
  routes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
    .config(routes);
}


