/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.rest {
  'use strict';

  export var Namespace = 'c3.common.services.rest';

  export var ID = {
    UsersService: `${Namespace}.UsersService`
  };

  angular
    .module(Namespace, [
      ID.UsersService
    ]);
}
