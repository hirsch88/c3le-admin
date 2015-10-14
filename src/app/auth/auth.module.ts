/// <reference path="../../../typings/tsd.d.ts" />

module c3.auth {
  'use strict';

  export var Namespace = 'c3.auth';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,
      `${Namespace}.services`,
      `${Namespace}.views`,
    ]);
}
