/// <reference path="../../../../typings/tsd.d.ts" />

module c3.auth.controllers {
  'use strict';

  export var Namespace = 'c3.auth.controllers';

  export var ID = {
    AuthSignInController: `${Namespace}.AuthSignInController`
  };

  angular
    .module(Namespace, [
      ID.AuthSignInController
    ]);


}
