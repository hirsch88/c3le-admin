/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {
  'use strict';

  /**
   * LoadingBar Config
   *
   * @desc Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   *
   * @constructor
   */
  var LoadingBarConfig = (cfpLoadingBarProvider) => {
    cfpLoadingBarProvider.includeSpinner = false;
  };
  LoadingBarConfig.$inject = ['cfpLoadingBarProvider'];


  angular
    .module(config.ID.LoadingBar, [
      'angular-loading-bar'
    ])
    .config(LoadingBarConfig);

}

