/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.bikes {
  'use strict';

  export var Namespace = 'c3.event.bikes';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.views`,
    ]);
}