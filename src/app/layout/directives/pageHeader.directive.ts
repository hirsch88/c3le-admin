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
    user: Promise<common.models.UserModel>;

    static $inject = [
      common.services.stores.ID.MyUserStoreService
    ];

    constructor(myUserStoreService: common.services.stores.MyUserStoreService) {
      this.user = myUserStoreService.get();
    }
  }

  angular
    .module(ID.PageHeader, [
      common.services.stores.ID.MyUserStoreService
    ])
    .directive('c3PageHeader', () => new PageHeaderDirective())
    .controller(ID.PageHeaderController, PageHeaderController);
}
