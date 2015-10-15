/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.dashboard {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var EventDashboardRoutes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.dashboard', {
        url: '/dashboard',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(controllers.ID.EventDashboardController),
            controller: controllers.ID.EventDashboardController,
            controllerAs: 'vm'
          }
        },
        data: {
          navigationKey: 'event',
          session: true
        }
      });
  };
  EventDashboardRoutes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
    .config(EventDashboardRoutes);
}

