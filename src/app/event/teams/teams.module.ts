/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.teams {
  'use strict';

  export var Namespace = 'c3.event.teams';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.views`,
    ]);
}
