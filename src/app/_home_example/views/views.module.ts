/// <reference path="../../../../typings/tsd.d.ts" />

module c3.home.views {
  'use strict';

  export var Namespace = 'c3.home.views';

  export var ID = {
    Home: `${Namespace}.Home`,
    HomeController: `${Namespace}.HomeController`
  };

  angular
    .module(Namespace, [
      ID.Home
    ]);


}
