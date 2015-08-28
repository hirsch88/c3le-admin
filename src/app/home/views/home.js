(function () {
  'use strict';

  angular
    .module('c3.home.views.Home', [])
    .config(StateConfig)
    .controller('homeController', HomeController);

  function StateConfig($stateProvider) {
    $stateProvider
      .state('admin.home', {
        url:           '/home',
        views:         {
          'content': {
            templateUrl:  util.templateUrl('c3.home.views.Home'),
            controller:   'homeController',
            controllerAs: 'home'
          }
        },
        data:{
          session:       true,
          navigationKey: 'home'
        }
      });
  }

  function HomeController(Logger) {
    var log = new Logger('c3.home.views.Home');
    var vm = this;
    vm.title = 'Hirsch says hi!';

    // Your code goes here...

  }

}());
