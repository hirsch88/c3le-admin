/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.components {
  'use strict';

  export var Namespace = 'c3.common.components';

  export var ID = {
    SpinnerSm: `${Namespace}.SpinnerSm`
  };

  angular
    .module(Namespace, [
      ID.SpinnerSm
    ]);
}
