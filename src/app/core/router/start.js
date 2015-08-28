(function () {
  'use strict';

  angular
    .module('c3.core.router.Start', [])
    .factory('AppRouterStart', AppRouterStart);

  function AppRouterStart() {
    var Start = function Start(state, params) {
      this.state = state;
      this.params = params;
    };

    return Start;

  }

}());
