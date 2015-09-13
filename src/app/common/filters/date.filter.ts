/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.common.filters {
  'use strict';

  var date = () => (input, format) => input.format(format);

  angular
    .module(ID.DateFilter, [])
    .filter('c3DateFilter', date);
}
