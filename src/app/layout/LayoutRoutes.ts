/// <reference path="../../../typings/tsd.d.ts" />

module c3.layout {
  'use strict';

  var Routes = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin', {
        abstract: true,
        views: {
          'root': {
            templateUrl: 'app/layout/views/AdminContainer.html'
          }
        }
      })
      .state('public', {
        abstract: true,
        views: {
          'root': {
            templateUrl: 'app/layout/views/PublicContainer.html'
          }
        }
      });
  };
  Routes.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Routes`, [
      'ui.router'
    ])
    .config(Routes);
}
