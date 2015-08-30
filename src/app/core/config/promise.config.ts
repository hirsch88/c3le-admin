/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {
  'use strict';

  /**
   * Promise Config
   *
   * @desc
   *
   * @constructor
   */
  var PromiseConfig = ($rootScope) => {
    Promise.setScheduler(function(cb) {
      $rootScope.$evalAsync(cb);
    });
  };
  PromiseConfig.$inject = ['$rootScope'];

  angular
    .module(config.ID.Promise, [])
    .run(PromiseConfig);

}

