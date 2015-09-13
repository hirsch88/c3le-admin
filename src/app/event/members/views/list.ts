/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.members.views {
  'use strict';


  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.event.members', {
        url: '/members',
        views: {
          'content': {
            templateUrl: core.util.Utils.templateUrl(ID.List),
            controller: ID.ListController,
            controllerAs: 'vm'
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

  // SIDEBAR ///////////////////////////////////////////////////////////////////////
  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'members', 'MEMBERS.TITLE', 'fa-user', 'admin.event.members', 'eventAdmin'
  );
  sidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(ID.List, [
      'ui.router',
      c3.core.util.ID.EventHandler,
      c3.common.services.dtos.ID.UsersService,
      c3.common.services.utils.ID.TableService
    ])
    .config(stateConfig)
    .run(sidebar)
    .controller(ID.ListController, ListController);
}
