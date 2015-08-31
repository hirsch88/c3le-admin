/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.home.views {
  'use strict';


  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.bubu', {
        url: '/bubu',
        navigationKey: 'bubu',
        views: {
          'content': {
            templateUrl: 'app/home/views/bubu.html',
            controller: c3.home.views.ID.BubuController,
            controllerAs: 'vm'
          }
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];


  // SIDEBAR ///////////////////////////////////////////////////////////////////////
  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push('bubu', 'BUBU.TITLE', 'fa-car', 'admin.bubu', 'clubAdmin');
  sidebar.$inject = [layout.services.ID.SidebarService];


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class BubuController extends core.util.ViewController {
    title = 'Bubu!';

    static $inject = [
      '$scope',
      core.util.ID.EventHandler
    ];

    counter: number = 0;

    constructor($scope,
                eventHandler: core.util.EventHandler) {
      super($scope, eventHandler);
      this.init();

    }

    private init() {
      ;
    }

  }

  angular
    .module(ID.Bubu, [
      layout.services.ID.SidebarService
    ])
    .config(stateConfig)
    .run(sidebar)
    .controller(ID.BubuController, BubuController);
}
