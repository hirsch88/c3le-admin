/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.utils {
  'use strict';

  export var Namespace = 'c3.common.services.utils';

  export var ID = {
    BackendService: `${Namespace}.BackendService`, 
    NotyService: `${Namespace}.NotyService`, 
    TableService: `${Namespace}.TableService`
  };

  angular
    .module(Namespace, [
      ID.BackendService, 
      ID.NotyService, 
      ID.TableService
    ]);
}
