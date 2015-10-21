/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.dashboard {
  'use strict';

  export var Namespace = 'c3.event.dashboard';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.controllers`,
    ]);
}
