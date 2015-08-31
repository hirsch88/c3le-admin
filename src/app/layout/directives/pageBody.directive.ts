/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  class PageBodyDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'app/layout/directives/pageBody.directive.html';
    controller = ID.PageBodyController;
    controllerAs = 'pageBody';
    bindToController = true;
  }

  export interface IPageBodyController {
  }

  class PageBodyController implements IPageBodyController {
    static $inject = [];
    constructor() {
      // TODO
    }
  }

  angular
    .module(ID.PageBody, [])
    .directive('c3PageBody', () => new PageBodyDirective())
    .controller(ID.PageBodyController, PageBodyController);
}
