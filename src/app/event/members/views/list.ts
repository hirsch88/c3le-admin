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


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler
    ];

    constructor($scope, eventHandler) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      ;
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
      'ui.router'
    ])
    .config(stateConfig)
    .run(sidebar)
    .controller(ID.ListController, ListController);
}
