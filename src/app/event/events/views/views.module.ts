/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.events.views {
  'use strict';

  export var Namespace = 'c3.event.events.views';

  export var ID = {
    List: `${Namespace}.List`,
    ListController: `${Namespace}.ListController`
  };

  angular
    .module(Namespace, [
      ID.List
    ]);


}
