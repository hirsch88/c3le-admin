/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.bikes.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IListScope {

  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class ListController extends core.util.ViewController implements IListScope {
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.rest.event.ID.TeamsRestService
    ];

    bikes: Promise<Array<c3.common.models.event.TeamModel>>;

    // CONSTRUCTOR /////////////////////////////////////////////
    constructor($scope, eventHandler,
                private teamService: c3.common.services.rest.event.TeamsRestService) {
      super($scope, eventHandler);
      this.init();
    }


    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////
    private init() {
      this.bikes = this.teamService.readAll();
    }

  }

  angular
    .module(ID.List, [
      'ui.router',
      core.util.ID.EventHandler,
      common.services.rest.event.ID.TeamsRestService
    ])
    .controller(ID.ListController, ListController);
}
