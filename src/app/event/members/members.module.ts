/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.members {
  'use strict';

  export var Namespace = 'c3.event.members';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.views`,
    ]);
}
