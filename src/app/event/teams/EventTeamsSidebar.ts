/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.teams {
  'use strict';

  var EventTeamsSidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'teams',
    'TEAMS.TITLE',
    'fa-group',
    'admin.event.teams',
    'eventAdmin',
    3
  );
  EventTeamsSidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(EventTeamsSidebar);
}

