/// <reference path="../../../typings/tsd.d.ts" />

module c3.event {
  'use strict';

  export var Namespace = 'c3.event';

  angular
    .module(Namespace, [
      `${Namespace}.Routes`,

      `${Namespace}.dashboard`,
      //`${Namespace}.teams`,
      //`${Namespace}.members`,
      `${Namespace}.abos`
    ]);
}
