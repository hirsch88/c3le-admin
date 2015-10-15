/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.events {
  'use strict';

  export var Namespace = 'c3.event.events';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.views`,
    ]);
}
