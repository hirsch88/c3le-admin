/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.filters {
  'use strict';

  export var Namespace = 'c3.common.filters';

  export var ID = {
    DateFilter: 'date'
  };

  angular
    .module(Namespace, [
      ID.DateFilter
    ]);


}
