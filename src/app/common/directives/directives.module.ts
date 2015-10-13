/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.directives {
  'use strict';

  export var Namespace = 'c3.common.directives';

  export var ID = {
    SpinnerSm: `${Namespace}.SpinnerSm`
  };

  angular
    .module(Namespace, [
      ID.SpinnerSm
    ]);
}
