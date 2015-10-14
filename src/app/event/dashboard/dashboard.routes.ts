/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.dashboard {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.dashboard', {
        url: '/dashboard',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(views.ID.Dashboard),
            controller: views.ID.DashboardController,
            controllerAs: 'vm'
          }
        },
        data: {
          navigationKey: 'event',
          session: true
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

