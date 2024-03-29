/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.common.services {
  'use strict';

  export var Namespace = 'c3.event.common.services';

  export var ID = {
    EventsService: `${Namespace}.EventsService`
  };

  angular
    .module(Namespace, [
      ID.EventsService
    ]);
}
