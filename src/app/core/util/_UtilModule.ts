/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.util {
  'use strict';

  export var Namespace = 'c3.core.util';

  export var ID = {
    EventHandler: `${Namespace}.EventHandler`,
    Logger: `${Namespace}.Logger`
  };

  angular
    .module(Namespace, [
      ID.EventHandler,
      ID.Logger
    ]);
}
