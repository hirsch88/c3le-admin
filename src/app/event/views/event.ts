/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.event.views {
  'use strict';


  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event', {
        abstract: true,
        url: '/event',
        views: {
          'content': {
            templateUrl: 'app/event/views/event.html'
          }
        },
        data: {
          session: true
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];

  angular
    .module(ID.Event, [
      'ui.router'
    ])
    .config(stateConfig);
}
