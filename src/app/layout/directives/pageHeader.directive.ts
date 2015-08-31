/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  class PageHeaderDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'app/layout/directives/pageHeader.directive.html';
    controller = ID.PageHeaderController;
    controllerAs = 'pageHeader';
    bindToController = true;
    scope = {
      pageTitle: '='
    }
  }

  export interface IPageHeaderController {
  }

  class PageHeaderController implements IPageHeaderController {
    static $inject = [];
    constructor() {
      // TODO
    }
  }

  angular
    .module(ID.PageHeader, [])
    .directive('c3PageHeader', () => new PageHeaderDirective())
    .controller(ID.PageHeaderController, PageHeaderController);
}
