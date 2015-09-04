/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.common {
  'use strict';

  export var Namespace = 'c3.event.common';

  angular
    .module(Namespace, [
      `${Namespace}.services`
    ]);
}
