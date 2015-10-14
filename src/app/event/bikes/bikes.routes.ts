/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.bikes {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.bikes', {
        url: '/bikes',
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
