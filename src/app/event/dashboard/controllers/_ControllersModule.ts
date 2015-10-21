/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.dashboard.controllers {
  'use strict';

  export var Namespace = 'c3.event.dashboard.controllers';

  export var ID = {
    EventDashboardController: `${Namespace}.EventDashboardController`
  };

  angular
    .module(Namespace, [
    ID.EventDashboardController
  ]);


}
