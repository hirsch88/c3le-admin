/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.utils {
  'use strict';

  export var Namespace = 'c3.common.services.utils';

  export var ID = {
    NotyService: `${Namespace}.NotyService`,
    BackendService: `${Namespace}.BackendService`
  };

  angular
    .module(Namespace, [
      ID.NotyService,
      ID.BackendService
    ]);
}
