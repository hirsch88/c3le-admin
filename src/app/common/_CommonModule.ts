/// <reference path="../../../typings/tsd.d.ts" />

module c3.common {
  'use strict';

  export var Namespace = 'c3.common';

  angular
    .module(Namespace, [
      `${Namespace}.components`,
      `${Namespace}.filters`,
      `${Namespace}.services`,
      `${Namespace}.utils`
    ]);
}
