/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.config {
  'use strict';

  export var Namespace = 'c3.core.config';

  export var ID = {
    Compile: `${Namespace}.Compile`,
    Translate: `${Namespace}.Translate`,
    Http: `${Namespace}.Http`,
    Promise: `${Namespace}.Promise`,
    Router: `${Namespace}.Router`,
    LoadingBar: `${Namespace}.LoadingBar`,
    Log: `${Namespace}.Log`,
    AppConfig: `${Namespace}.AppConfig`
  };

  angular
    .module(Namespace, [
      ID.Compile,
      ID.Translate,
      ID.Http,
      ID.Promise,
      ID.Router,
      ID.LoadingBar,
      ID.Log,
      ID.AppConfig
    ]);
}
