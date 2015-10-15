/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.bills {
  'use strict';

  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'bills',
    'BILLS.TITLE',
    'fa-usd',
    'admin.event.bills',
    'eventAdmin',
    2
  );
  sidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(sidebar);
}

