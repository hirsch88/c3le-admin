/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  class PageBodyDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'app/layout/directives/pageBody.directive.html';
    //controller = ID.PageBodyController;
    //controllerAs = 'pageBody';
    //bindToController = true;
    transclude = true;
    scope = {
      pagePromise: '='
    };
  }

  //class PageBodyController {
  //  static $inject = [];
  //  constructor() {
  //    // TODO
  //  }
  //}

  angular
    .module(ID.PageBody, [])
    .directive('c3PageBody', () => new PageBodyDirective());
    //.controller(ID.PageBodyController, PageBodyController);
}
