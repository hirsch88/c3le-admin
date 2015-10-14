/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.teams.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IListScope {

  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class ListController extends core.util.ViewController implements IListScope {
    users: Promise<Array<c3.common.models.UserModel>>;
    table: c3.common.services.utils.TableService;

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.dtos.ID.UsersService,
      c3.common.services.utils.ID.TableService
    ];

    constructor($scope, eventHandler,
                private usersService: c3.common.services.dtos.UsersService,
                private tableService: c3.common.services.utils.TableFactory) {
      super($scope, eventHandler);
      this.activate();
    }

    private activate() {
      this.users = this.usersService.readAll();
      this.table = this.tableService.create();
    }


    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////

  }

  angular
    .module(ID.List, [
      'ui.router',
      c3.core.util.ID.EventHandler,
      c3.common.services.dtos.ID.UsersService,
      c3.common.services.utils.ID.TableService
    ])
    .controller(ID.ListController, ListController);
}
