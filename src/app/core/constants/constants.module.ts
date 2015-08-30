/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.constants {
  'use strict';

  export var Namespace = 'c3.core.constants';

  export var ID = {
    AppConfig: `${Namespace}.Config`
  };

  angular
    .module(Namespace, [
      ID.AppConfig
    ]);


}
