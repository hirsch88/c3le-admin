/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.members.views {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IListScope {

  }


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class ListController extends core.util.ViewController implements IListScope {
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.rest.ID.UsersRestService,
      c3.common.services.utils.ID.TableService
    ];

    users: Promise<Array<c3.common.models.UserModel>>;
    table: c3.common.services.utils.TableService;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor($scope, eventHandler,
                private usersService: c3.common.services.rest.UsersRestService,
                private tableService: c3.common.services.utils.TableFactory) {
      super($scope, eventHandler);
      this.init();
    }


    // PUBLIC API /////////////////////////////////////////////


    // PRIVATE API ////////////////////////////////////////////
    private init() {
      this.users = this.usersService.readAll();
      this.table = this.tableService.create();
    }

  }

  angular
    .module(ID.List, [
      'ui.router',
      c3.core.util.ID.EventHandler,
      c3.common.services.rest.ID.UsersRestService,
      c3.common.services.utils.ID.TableService
    ])
    .controller(ID.ListController, ListController);
}
