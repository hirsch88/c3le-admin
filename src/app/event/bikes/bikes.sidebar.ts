/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.bikes {
  'use strict';

  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'bikes',
    'BIKES.TITLE',
    'fa-bicycle',
    'admin.event.bikes',
    'eventAdmin',
    1
  );
  sidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(sidebar);
}

