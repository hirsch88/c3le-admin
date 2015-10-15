/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.teams.controllers {
  'use strict';

  export var Namespace = 'c3.event.teams.controllers';

  export var ID = {
    EventTeamListController: `${Namespace}.EventTeamListController`
  };

  angular
    .module(Namespace, [
      ID.EventTeamListController
    ]);


}
