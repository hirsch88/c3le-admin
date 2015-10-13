/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.directives {
  'use strict';

  class SpinnerSmDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'app/common/directives/spinnerSm.directive.html';
    scope = {
      dark: '='
    }
  }

  angular
    .module(ID.SpinnerSm, [])
    .directive('c3SpinnerSm', () => new SpinnerSmDirective());
}

