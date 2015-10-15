/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.dashboard.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IDashboardScope {
    prop: string;
  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class DashboardController extends core.util.ViewController implements IDashboardScope {
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      common.services.utils.ID.NotyService
    ];

    prop: string;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor($scope, eventHandler, private notyService: common.services.utils.NotyService) {
      super($scope, eventHandler);
      this.init();
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
    private init() {
      // TODO: call some service to asynchronously return data

      // Event Handling
      this.addListener('someEvent', this.notyDefault);
      this.fireEvent('otherEvent', this.prop);
    }

  }

  angular
    .module(ID.Dashboard, [
      'ui.router',
      common.services.utils.ID.NotyService
    ])
    .controller(ID.DashboardController, DashboardController);
}
