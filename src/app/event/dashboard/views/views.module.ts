/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.dashboard.views {
  'use strict';

  export var Namespace = 'c3.event.dashboard.views';

  export var ID = {
    Dashboard: `${Namespace}.Dashboard`,
    DashboardController: `${Namespace}.DashboardController`
  };

  angular
    .module(Namespace, [
    ID.Dashboard
  ]);


}
