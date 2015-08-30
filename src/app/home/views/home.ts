/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.home.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.home', {
        url: '/home',
        navigationKey: 'home',
        views: {
          'content': {
            templateUrl: 'app/home/views/home.html',
            controller: ID.HomeController,
            controllerAs: 'home'
          }
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];

  //////////////////////////////////////////////////////////////////////

  export interface IHomeController {
    title: string;
  }

  class HomeController implements IHomeController, core.util.IEventManageable {
    offs: Function[] = [];

    title = 'Hirsch says hi!';

    static $inject = ['$scope', core.util.ID.EventHandler];

    constructor($scope, eventHandler: core.util.IEventHandler) {
      this.offs.push(eventHandler.on('someEvent', this.onSomeEvent));

      $scope.$on('$destroy', () => this.dispose());

      this.activate();
    }

    private onSomeEvent = (eventObj: any) => {
      // TODO: handle event
    };

    private activate = () => {
      // run initialization logic
    };

    dispose() {
      this.offs.forEach(off => off());
    }
  }

  angular
    .module(ID.Home, [])
    .config(stateConfig)
    .controller(ID.HomeController, HomeController);
}
