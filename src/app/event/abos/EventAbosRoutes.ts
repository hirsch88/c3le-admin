/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.abos {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var EventAbosRoutes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.abos', {
        url: '/abos',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(controllers.ID.EventAboListController),
            controller: controllers.ID.EventAboListController,
            controllerAs: 'vm'
          }
        },
        data: {
          navigationKey: 'event',
          session: true
        }
      });
  };
  EventAbosRoutes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
  .config(EventAbosRoutes);
}
