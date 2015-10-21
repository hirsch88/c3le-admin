/// <reference path="../../../../../../typings/tsd.d.ts" />

module c3.common.services.rest.event {
  'use strict';

  export var Namespace = 'c3.common.services.rest.event';

  export var ID = {
    TeamsRestService: `${Namespace}.TeamsRestService`,
    EventsRestService: `${Namespace}.EventsRestService`,
    EventAboRestService: `${Namespace}.EventAboRestService`
  };

  angular
    .module(Namespace, [
      ID.TeamsRestService,
      ID.EventsRestService,
      ID.EventAboRestService
    ]);
}
