/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.services {
  'use strict';

  export var Namespace = 'c3.layout.services';

  export var ID = {
    SidebarService: `${Namespace}.SidebarService`
  };

  angular
    .module(Namespace, [
      ID.SidebarService
    ]);
}
