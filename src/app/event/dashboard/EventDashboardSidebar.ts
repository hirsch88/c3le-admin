/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.dashboard {
  'use strict';

  var EventDashboardSidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'dashboard',
    'DASHBOARD.TITLE',
    'fa-dashboard',
    'admin.event.dashboard',
    'eventAdmin',
    0
  );
  EventDashboardSidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(EventDashboardSidebar);
}

