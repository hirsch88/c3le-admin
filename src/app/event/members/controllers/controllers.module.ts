/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.members.controllers {
  'use strict';

  export var Namespace = 'c3.event.members.controllers';

  export var ID = {
    EventMembersListController: `${Namespace}.EventMembersListController`
  };

  angular
    .module(Namespace, [
      ID.EventMembersListController
    ]);


}
