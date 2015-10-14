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
    user: Promise<common.models.UserModel>;
  }

  class PageHeaderController implements IPageHeaderController {
    user: Promise<common.models.UserModel>;

    static $inject = [
      common.services.rest.ID.UsersRestService
    ];

    constructor(usersService: common.services.rest.UsersRestService) {
      this.user = usersService.getMySelf();
    }
  }

  angular
    .module(ID.PageHeader, [
      common.services.rest.ID.UsersRestService
    ])
    .directive('c3PageHeader', () => new PageHeaderDirective())
    .controller(ID.PageHeaderController, PageHeaderController);
}

