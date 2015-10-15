/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.members {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var EventMembersRoutes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.members', {
        url: '/members',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(controllers.ID.EventMembersListController),
            controller: controllers.ID.EventMembersListController,
            controllerAs: 'vm'
          }
        },
        data: {
          navigationKey: 'event',
          session: true
        }
      });
  };
  EventMembersRoutes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
  .config(EventMembersRoutes);
}
