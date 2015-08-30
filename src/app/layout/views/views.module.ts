/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.layout.views {
  'use strict';

  export var Namespace = 'c3.layout.views';

  angular
    .module(Namespace, [
      `${Namespace}.Admin`,
      `${Namespace}.Public`
    ]);
}
