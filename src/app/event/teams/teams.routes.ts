/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.teams {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.teams', {
        url: '/teams',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(views.ID.List),
            controller: views.ID.ListController,
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
