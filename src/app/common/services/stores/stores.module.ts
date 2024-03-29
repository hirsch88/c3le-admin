/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.stores {
  'use strict';

  export var Namespace = 'c3.common.services.stores';

  export var ID = {
    MyUserStoreService: `${Namespace}.MyUserStoreService`
  };

  angular
    .module(Namespace, [
      ID.MyUserStoreService
    ]);
}
