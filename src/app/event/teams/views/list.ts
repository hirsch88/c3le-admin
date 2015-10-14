/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.teams.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IListScope {

  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class ListController extends core.util.ViewController implements IListScope {
    teams: Promise<Array<c3.common.models.event.TeamModel>>;
    table: c3.common.services.utils.TableService;

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.rest.event.ID.TeamsService,
      c3.common.services.utils.ID.TableService
    ];

    constructor($scope, eventHandler,
                private teamService: c3.common.services.rest.event.TeamsService,
                private tableService: c3.common.services.utils.TableFactory) {
      super($scope, eventHandler);
      this.activate();
    }

    private activate() {
      this.teams = this.teamService.readAll();
      this.table = this.tableService.create();
    }


    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////

  }

  angular
    .module(ID.List, [
      'ui.router',
      core.util.ID.EventHandler,
      common.services.rest.event.ID.TeamsService,
      common.services.utils.ID.TableService
    ])
    .controller(ID.ListController, ListController);
}
