/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.config {
  'use strict';

  export var Namespace = 'c3.core.config';

  export var ID = {
    Compile: `${Namespace}.Compile`,
    Translate: `${Namespace}.Translate`,
    Http: `${Namespace}.Http`,
    Log: `${Namespace}.Log`
  };

  angular
    .module(Namespace, [
      ID.Compile,
      ID.Translate,
      ID.Http,
      ID.Log
    ]);
}
