/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.members {
  'use strict';

  var EventMembersSidebar = (sidebarService: layout.services.SidebarService) => sidebarService.push(
    'members',
    'EVENT_MEMBERS.TITLE',
    'fa-user',
    'admin.event.members',
    'eventAdmin',
    4
  );
  EventMembersSidebar.$inject = [layout.services.ID.SidebarService];

  angular
    .module(`${Namespace}.Sidebar`, [
      layout.services.ID.SidebarService
    ])
    .run(EventMembersSidebar);
}

