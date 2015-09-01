/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.services {
  'use strict';

  export var Namespace = 'c3.common.services';

  export var ID = {
    NotyService: `${Namespace}.NotyService`
  };

  angular
    .module(Namespace, [
      ID.NotyService
    ]);
}
