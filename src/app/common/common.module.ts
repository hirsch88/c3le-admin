/// <reference path="../../../typings/tsd.d.ts" />

module c3.common {
  'use strict';

  export var Namespace = 'c3.common';

  angular
    .module(Namespace, [
      `${Namespace}.directives`,
      `${Namespace}.filters`,
      `${Namespace}.models`,
      `${Namespace}.services`,
      `${Namespace}.utils`
    ]);
}
