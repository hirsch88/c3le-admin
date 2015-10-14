/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.dashboard.views {
  'use strict';


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

  angular
    .module(ID.Dashboard, [
      'ui.router'
    ])
    .controller(ID.DashboardController, DashboardController);
}
