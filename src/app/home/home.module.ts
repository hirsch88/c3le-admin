/// <reference path="../../../typings/tsd.d.ts" />

module c3.home {
  'use strict';

  export var Namespace = 'c3.home';

  angular
    .module(Namespace, [
      `${Namespace}.views`
    ]);
}
