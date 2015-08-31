/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.home.views {
  'use strict';

  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.bubu', {
        url: '/bubu',
        navigationKey: 'bubu',
        views: {
          'content': {
            templateUrl: 'app/home/views/bubu.html',
            controller: c3.home.views.ID.BubuController,
            controllerAs: 'vm'
          }
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];

  //////////////////////////////////////////////////////////////////////

  export interface IBubuController {
    title: string;
  }

  class BubuController implements IBubuController {
    disposes: Function[] = [];

    title = 'Bubu!';

    static $inject = [
      '$scope',
      core.util.ID.EventHandler
    ];

    counter: number = 0;

    constructor($scope,
                private eventHandler: core.util.IEventHandler) {

      $scope.$on('$destroy', () => this.dispose());

      this.disposes.push(eventHandler.on('bubu', this.onSomeEvent));

      this.activate();

    }

    submit() {
      this.eventHandler.broadcast('bubu', ++this.counter);
    }

    private onSomeEvent = (eventObj: any) => {
      console.info('bubu ', eventObj);
    };

    private activate = () => {
      console.warn(this.eventHandler.list());
    };

    dispose() {
      this.disposes.forEach(disposes => disposes());
    }
  }

  angular
    .module(ID.Bubu, [])
    .config(stateConfig)
    .controller(ID.BubuController, BubuController);
}
