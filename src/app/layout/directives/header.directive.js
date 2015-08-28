(function () {
  'use strict';

  angular
    .module('c3.layout.directives.Header', [])
    .directive('c3Header', HeaderDirective);

  function HeaderDirective() {
    return {
      restrict:         'EA',
      templateUrl:      util.templateUrl('c3.layout.directives.Header'),
      controller:       HeaderController,
      controllerAs:     'header',
      bindToController: true // because the scope is isolated
    };
  }

  /**
   * @memberOf layout.c3Header
   * @name HeaderController
   *
   * @constructor
   */
  function HeaderController(Logger, appConfig) {
    var log = new Logger('c3.layout.directives.Header');
    var vm = this;
    vm.title = appConfig.ENVIRONMENT;
    // Your code goes here...

  }


}());
