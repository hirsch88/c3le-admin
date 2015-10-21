/// <reference path="../../../typings/tsd.d.ts" />

module c3.core {
  'use strict';

  export var Namespace = 'c3.core';

  angular
    .module(Namespace, [
      `${Namespace}.config`,
      `${Namespace}.router`,
      `${Namespace}.middleware`,
      `${Namespace}.util`
    ]);
}
