/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.layout.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state('public', {
      abstract: true,
      views: {
        'root': {
          templateUrl: 'app/layout/views/public.html'
        }
      }
    });
  };
  
  stateConfig.$inject = ['$stateProvider'];

  angular
    .module(`${Namespace}.Public`, [])
    .config(stateConfig);
}
