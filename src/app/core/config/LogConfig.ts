/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {
  'use strict';

  /**
   * Log Config
   *
   * @desc Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   *
   * @constructor
   */
  var LogConfig = ($logProvider) => {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
  };
  LogConfig.$inject = ['$logProvider'];


  angular
    .module(config.ID.Log, [])
    .config(LogConfig);

}

