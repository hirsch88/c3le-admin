/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.teams.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IListScope {

  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class ListController extends core.util.ViewController implements IListScope {
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.rest.event.ID.TeamsRestService,
      c3.common.services.utils.ID.TableService
    ];

    teams: Promise<Array<c3.common.models.event.TeamModel>>;
    table: c3.common.services.utils.TableService;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor($scope, eventHandler,
                private teamService: c3.common.services.rest.event.TeamsRestService,
                private tableService: c3.common.services.utils.TableFactory) {
      super($scope, eventHandler);
      this.init();
    }


    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////
    private init() {
      this.teams = this.teamService.readAll();
      this.table = this.tableService.create();
    }

  }

  angular
    .module(ID.List, [
      'ui.router',
      core.util.ID.EventHandler,
      common.services.rest.event.ID.TeamsRestService,
      common.services.utils.ID.TableService
    ])
    .controller(ID.ListController, ListController);
}
