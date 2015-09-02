/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.middleware {
  'use strict';

  export var Namespace = 'c3.core.middleware';

  export var ID = {
    Event: `${Namespace}.Event`
  };

  angular
    .module(Namespace, [
      ID.Event
    ]);
}
