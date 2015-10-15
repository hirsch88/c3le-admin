/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  class PageHeaderDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = core.util.Utils.templateUrl(ID.PageHeader);
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
    static $inject = [
      common.services.rest.ID.UsersRestService
    ];

    user: Promise<common.models.UserModel>;


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
