/// <reference path="../../../typings/tsd.d.ts" />

module c3.event {
  'use strict';

  export var Namespace = 'c3.event';

  angular
    .module(Namespace, [
      `${Namespace}.views`,
      `${Namespace}.dashboard`,
      `${Namespace}.bikes`,
      `${Namespace}.bills`,
      `${Namespace}.teams`,
      `${Namespace}.members`
    ]);
}
