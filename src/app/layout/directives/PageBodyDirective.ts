/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  class PageBodyDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = core.util.Utils.templateUrl(ID.PageBody);
    transclude = true;
    scope = {
      pagePromise: '='
    };
  }

  angular
    .module(ID.PageBody, [])
    .directive('c3PageBody', () => new PageBodyDirective());
}
