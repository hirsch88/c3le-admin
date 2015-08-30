/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {
  'use strict';

  /**
   * Compile Config
   *
   * @desc Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   *
   * @constructor
   */
  var CompileConfig = ($compileProvider) => {
    $compileProvider.debugInfoEnabled(false);
  };
  CompileConfig.$inject = ['$compileProvider'];


  angular
    .module(config.ID.Compile, [])
    .config(CompileConfig);

}

