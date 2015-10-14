/// <reference path="../../../typings/tsd.d.ts" />

module c3.event {
  'use strict';

  export var Namespace = 'c3.event';

  angular
    .module(Namespace, [
      `${Namespace}.views`,

      `${Namespace}.dashboard`,
      `${Namespace}.members`,
      `${Namespace}.teams`
    ]);
}
