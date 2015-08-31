/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.home.views {
  'use strict';

  // STATE /////////////////////////////////////////////////////////////////////////
  var stateConfig = ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider
      .state('admin.home', {
        url: '/home',
        navigationKey: 'home',
        views: {
          'content': {
            templateUrl: 'app/home/views/home.html',
            controller: c3.home.views.ID.HomeController,
            controllerAs: 'vm'
          }
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];

  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class HomeController extends core.util.EventController {

    title = 'Hirsch says hi!';
    counter: number = 0;

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
      this.addListener('bubu', this.onSomeEvent);
    }

    // PUBLIC API /////////////////////////////////////////////
    submit() {
      this.fireEvent('bubu', ++this.counter);
    }

    // PRIVATE API ////////////////////////////////////////////
    private onSomeEvent = (eventObj: any) => {
      console.info('bubu ', eventObj);
    };



  }

  angular
    .module(ID.Home, [])
    .config(stateConfig)
    .controller(ID.HomeController, HomeController);
}
