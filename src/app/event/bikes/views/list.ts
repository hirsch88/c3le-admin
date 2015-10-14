/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.bikes.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IListScope {

  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class ListController extends core.util.ViewController implements IListScope {
    bikes: Promise<Array<c3.common.models.event.TeamModel>>;

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.rest.event.ID.TeamsRestService
    ];

    constructor($scope, eventHandler,
                private teamService: c3.common.services.rest.event.TeamsRestService) {
      super($scope, eventHandler);
      this.activate();
    }

    private activate() {
      this.bikes = this.teamService.readAll();
    }


    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////

  }

  angular
    .module(ID.List, [
      'ui.router',
      core.util.ID.EventHandler,
      common.services.rest.event.ID.TeamsRestService
    ])
    .controller(ID.ListController, ListController);
}
