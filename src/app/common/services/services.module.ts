/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.services {
  'use strict';

  export var Namespace = 'c3.common.services';

  angular
    .module(Namespace, [
      `${Namespace}.dtos`,
      `${Namespace}.utils`,
      `${Namespace}.stores`
    ]);
}
