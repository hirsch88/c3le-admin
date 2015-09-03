/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.views {
  'use strict';

  export var Namespace = 'c3.event.views';

  export var ID = {
    Event: `${Namespace}.Event`,
    EventController: `${Namespace}.EventController`
  };

  angular
    .module(Namespace, [
    ID.Event
  ]);


}
