/// <reference path="../../../typings/tsd.d.ts" />

module c3.layout {
  'use strict';

  export var Namespace = 'c3.layout';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,

      `${Namespace}.services`,
      `${Namespace}.directives`,
    ]);
}
