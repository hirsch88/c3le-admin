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
        },
        data: {
          session: true
        }
      });
  };
  stateConfig.$inject = ['$stateProvider'];


  // SIDEBAR ///////////////////////////////////////////////////////////////////////
  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push('home', 'HOME.TITLE', 'fa-home', 'admin.home', 'eventAdmin');
  sidebar.$inject = [layout.services.ID.SidebarService];


  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class HomeController extends core.util.ViewController {

    title = 'Hirsch says hi!';
    counter: number = 0;
    bubuPromise: Promise<{}>;

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      '$timeout',
      core.util.ID.EventHandler,
      common.services.utils.ID.NotyService
    ];

    constructor($scope,
                private $timeout, eventHandler,
                private $noty: common.services.utils.NotyService) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      this.addListener('bubu', this.onSomeEvent);
      this.bubuPromise = this.loadBubu();
    }

    loadBubu() {
      return new Promise((resolve, reject) => {
        this.$timeout(() => {
          resolve('wuhuu');
        }, 2000);
      });
    }

    // PUBLIC API /////////////////////////////////////////////
    submit() {
      this.fireEvent('bubu', ++this.counter);
    }

    sayOk() {
      this.$noty.success('Okay');
    }

    // PRIVATE API ////////////////////////////////////////////
    private onSomeEvent = (eventObj: any) => {
      console.log('bubu ', eventObj);
    };


  }

  angular
    .module(ID.Home, [
      layout.services.ID.SidebarService,
      common.services.utils.ID.NotyService
    ])
    .config(stateConfig)
    .run(sidebar)
    .controller(ID.HomeController, HomeController);
}
