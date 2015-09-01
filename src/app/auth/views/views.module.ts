/// <reference path="../../../../typings/tsd.d.ts" />

module c3.auth.views {
  'use strict';

  export var Namespace = 'c3.auth.views';

  export var ID = {
    Login: `${Namespace}.Login`,
    LoginController: `${Namespace}.LoginController`
  };

  angular
    .module(Namespace, [
      ID.Login
    ]);


}
