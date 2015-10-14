/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.services {
  'use strict';

  export var Namespace = 'c3.common.services';

  export var ID = {
    EventsService: `${Namespace}.EventsService`
  };

  angular
    .module(Namespace, [
      `${Namespace}.dtos`,
      `${Namespace}.utils`,
      `${Namespace}.stores`,

      ID.EventsService
    ]);
}
