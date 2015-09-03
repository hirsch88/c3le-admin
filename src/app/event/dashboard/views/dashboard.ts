/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.dashboard.views {
  'use strict';


  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.dashboard', {
        url: '/dashboard',
        views: {
          'content': {
            templateUrl: 'app/event/dashboard/views/dashboard.html',
            controller: ID.DashboardController,
            controllerAs: 'dashboard'
          }
        },
        data: {
          navigationKey: 'event',
          session: true
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IDashboardScope {
    prop: string;
    method(param: string): string;
  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class DashboardController extends core.util.ViewController implements IDashboardScope {
    prop: string;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler
    ];

    constructor($scope, eventHandler) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      // TODO: call some service to asynchronously return data

      // Event Handling
      this.addListener('someEvent', this.method);
      this.fireEvent('otherEvent', this.prop);
    }


    // PUBLIC API /////////////////////////////////////////////
    method(param: string) {
      return param;
    }


    // PRIVATE API ////////////////////////////////////////////

  }

  // SIDEBAR ///////////////////////////////////////////////////////////////////////
  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'dashboard', 'DASHBOARD.TITLE', 'fa-dashboard', 'admin.event.dashboard', 'eventAdmin'
  );
  sidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(ID.Dashboard, [
      'ui.router'
    ])
    .config(stateConfig)
    .run(sidebar)
    .controller(ID.DashboardController, DashboardController);
}
