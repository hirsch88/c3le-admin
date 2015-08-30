/// <reference path="../../../../typings/tsd.d.ts" />

module c3.layout.directives {
  'use strict';

  export var Namespace = 'c3.layout.directives';

  angular
    .module(Namespace, [
      `${Namespace}.Header`
    ]);
}
