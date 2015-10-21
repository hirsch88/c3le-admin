/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.abos {
  'use strict';

  export var Namespace = 'c3.event.abos';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.controllers`,
    ]);
}
