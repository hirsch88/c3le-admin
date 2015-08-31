/// <reference path="../../../../typings/tsd.d.ts" />

module c3.home.views {
  'use strict';

  export var Namespace = 'c3.home.views';

  export var ID = {
    Home: `${Namespace}.Home`,
    HomeController: `${Namespace}.HomeController`,
    Bubu: `${Namespace}.Bubu`,
    BubuController: `${Namespace}.BubuController`
  };

  angular
    .module(Namespace, [
      ID.Home,
      ID.Bubu
    ]);


}
