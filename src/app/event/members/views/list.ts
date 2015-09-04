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
            controllerAs: 'members'
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

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      c3.common.services.dtos.ID.UsersService
    ];

    constructor($scope, eventHandler,
                private usersService: c3.common.services.dtos.UsersService) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      this.users = this.usersService.readAll();
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
      c3.common.services.dtos.ID.UsersService
    ])
    .config(stateConfig)
    .run(sidebar)
    .controller(ID.ListController, ListController);
}
