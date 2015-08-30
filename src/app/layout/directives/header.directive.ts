/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  /**
   * Header element outside of the ngView area
   */
  class HeaderDirective implements ng.IDirective {
    restrict = 'EA';
    templateUrl = 'app/layout/directives/header.directive.html';
    controller = HeaderController;
    controllerAs = 'header';
    bindToController = true; // because the scope is isolated
  }

  export interface IHeaderController {
    title: string;
  }

  class HeaderController implements IHeaderController {
    title: string;

    static $inject = [core.constants.ID.AppConfig];
    constructor(config: core.constants.IAppConfig) {
      this.title = config.ENVIRONMENT;
    }
  }

  angular
    .module(`${Namespace}.Header`, [])
    .directive('c3Header', () => new HeaderDirective());
}
