/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.events {
  'use strict';

  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'events',
    'EVENTS.TITLE',
    'fa-wrench',
    'admin.event.events',
    'eventAdmin'
  );
  sidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(sidebar);
}

