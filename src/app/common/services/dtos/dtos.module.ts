/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.dtos {
  'use strict';

  export var Namespace = 'c3.common.services.dtos';

  export var ID = {
    UsersService: `${Namespace}.UsersService`,
    TeamsService: `${Namespace}.TeamsService`
  };

  angular
    .module(Namespace, [
      ID.UsersService,
      ID.TeamsService
    ]);
}
