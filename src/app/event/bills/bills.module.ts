/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.bills {
  'use strict';

  export var Namespace = 'c3.event.bills';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.Sidebar`,

      `${Namespace}.views`,
    ]);
}
