/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  export var Namespace = 'c3.layout.directives';

  export var ID = {
    Sidebar: `${Namespace}.Sidebar`,
    PageHeader: `${Namespace}.PageHeader`,
    PageBody: `${Namespace}.PageBody`,
    SidebarController: `${Namespace}.SidebarController`,
    PageHeaderController: `${Namespace}.PageHeaderController`,
    PageBodyController: `${Namespace}.PageBodyController`
  };

  angular
    .module(Namespace, [
      ID.Sidebar,
      ID.PageHeader,
      ID.PageBody
    ]);
}
