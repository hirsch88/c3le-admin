/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.dashboard.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IDashboardScope {
    prop: string;
  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class DashboardController extends core.util.ViewController implements IDashboardScope {
    prop: string;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      common.services.utils.ID.NotyService
    ];

    constructor($scope, eventHandler, private notyService: common.services.utils.NotyService) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      // TODO: call some service to asynchronously return data

      // Event Handling
      this.addListener('someEvent', this.notyDefault);
      this.fireEvent('otherEvent', this.prop);
    }


    // PUBLIC API /////////////////////////////////////////////
    notyDefault() {
      this.notyService.alert('Text');
    }

    notySuccess() {
      this.notyService.success('Text');
    }

    notyInfo() {
      this.notyService.info('Text');
    }

    notyWarn() {
      this.notyService.warn('Text');
    }

    notyError() {
      this.notyService.error('Text');
    }

    notyBusy() {
      this.notyService.busy();
    }


    // PRIVATE API ////////////////////////////////////////////

  }

  angular
    .module(ID.Dashboard, [
      'ui.router',
      common.services.utils.ID.NotyService
    ])
    .controller(ID.DashboardController, DashboardController);
}
