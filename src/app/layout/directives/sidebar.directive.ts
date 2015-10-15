/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  class SidebarDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'app/layout/directives/sidebar.directive.html';
    controller = ID.SidebarController;
    controllerAs = 'sidebar';
    bindToController = true;
  }


  class SidebarController {
    static $inject = [
      services.ID.SidebarService
    ];

    public selectedEnvironment: string = 'eventAdmin';


    constructor(private sidebarService: services.SidebarService) {

    }

    select(environment: string) {
      this.selectedEnvironment = environment || 'eventAdmin';
    }

    getEnvironments() {
      return this.sidebarService.getEnvironments();
    }

    getList() {
      return this.sidebarService.get(this.selectedEnvironment);
    }

  }

  angular
    .module(ID.Sidebar, [
      services.ID.SidebarService
    ])
    .directive('c3Sidebar', () => new SidebarDirective())
    .controller(ID.SidebarController, SidebarController);
}
