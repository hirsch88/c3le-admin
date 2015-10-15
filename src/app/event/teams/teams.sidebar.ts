/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.teams {
  'use strict';

  var sidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'teams',
    'TEAMS.TITLE',
    'fa-group',
    'admin.event.teams',
    'eventAdmin',
    3
  );
  sidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(sidebar);
}

