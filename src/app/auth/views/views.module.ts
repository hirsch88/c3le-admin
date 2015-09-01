/// <reference path="../../../../typings/tsd.d.ts" />

module c3.auth.views {
  'use strict';

  export var Namespace = 'c3.auth.views';

  export var ID = {
    SignIn: `${Namespace}.SignIn`,
    SignInController: `${Namespace}.SignInController`
  };

  angular
    .module(Namespace, [
      ID.SignIn
    ]);


}
