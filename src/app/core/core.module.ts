/// <reference path="../../../typings/tsd.d.ts" />

module c3.core {
  'use strict';

  export var Namespace = 'c3.core';

  angular
    .module(Namespace, [
      `${Namespace}.constants`,
      `${Namespace}.config`,
      //`${Namespace}.router`,
      `${Namespace}.util`
    ]);
}
