/// <reference path="../../../../../../typings/tsd.d.ts" />

module c3.common.services.rest.event {
  'use strict';

  export var Namespace = 'c3.common.services.rest.event';

  export var ID = {
    TeamsService: `${Namespace}.TeamsService`
  };

  angular
    .module(Namespace, [
      ID.TeamsService
    ]);
}
