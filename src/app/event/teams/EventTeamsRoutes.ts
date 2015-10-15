/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.teams {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var EventTeamsRoutes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.teams', {
        url: '/teams',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(controllers.ID.EventTeamListController),
            controller: controllers.ID.EventTeamListController,
            controllerAs: 'vm'
          }
        },
        data: {
          navigationKey: 'event',
          session: true
        }
      });
  };
  EventTeamsRoutes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
  .config(EventTeamsRoutes);
}
