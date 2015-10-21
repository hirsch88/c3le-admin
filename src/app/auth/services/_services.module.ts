/// <reference path="../../../../typings/tsd.d.ts" />

module c3.auth.services {
  'use strict';

  export var Namespace = 'c3.auth.services';

  export var ID = {
    AuthenticationService: `${Namespace}.AuthenticationService`
  };

  angular
    .module(Namespace, [
      ID.AuthenticationService
    ]);
}
