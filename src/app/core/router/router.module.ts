/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.router {
  'use strict';

  export var Namespace = 'c3.core.router';

  export var ID = {
    Router: `${Namespace}.Router`,
  };

  angular
    .module(Namespace, [
      ID.Router,
    ]);
}
