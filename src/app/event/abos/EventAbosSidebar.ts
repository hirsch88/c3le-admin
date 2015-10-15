/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.abos {
  'use strict';

  var EventAbosSidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'abos',
    'EVENT_ABOS.TITLE',
    'fa-ticket',
    'admin.event.abos',
    'eventAdmin',
    5
  );
  EventAbosSidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(EventAbosSidebar);
}

