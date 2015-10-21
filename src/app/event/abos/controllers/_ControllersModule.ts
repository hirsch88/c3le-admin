/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.abos.controllers {
  'use strict';

  export var Namespace = 'c3.event.abos.controllers';

  export var ID = {
    EventAboListController: `${Namespace}.EventAboListController`
  };

  angular
    .module(Namespace, [
      ID.EventAboListController
    ]);


}
