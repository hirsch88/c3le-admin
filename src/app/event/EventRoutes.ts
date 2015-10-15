/// <reference path="../../../typings/tsd.d.ts" />

module c3.event {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var EventRoutes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event', {
        abstract: true,
        url: '/event',
        views: {
          'content': {
            templateUrl: 'app/event/views/EventContainer.html'
          }
        },
        data: {
          session: true
        }
      });
  };
  EventRoutes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
    .config(EventRoutes);
}
