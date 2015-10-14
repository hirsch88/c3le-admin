/// <reference path="../../../../../../typings/tsd.d.ts" />

module c3.common.services.dtos.event {
  'use strict';

  export var Namespace = 'c3.common.services.dtos.event';

  export var ID = {
    TeamsService: `${Namespace}.TeamsService`
  };

  angular
    .module(Namespace, [
      ID.TeamsService
    ]);
}
