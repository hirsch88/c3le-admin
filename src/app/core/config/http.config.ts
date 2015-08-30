/// <reference path="../../../../typings/tsd.d.ts" />
module c3.core.config {

  /**
   * Http Config
   *
   * @desc Tools like Protractor and Batarang need this information to run, but you can disable
   * this in production for a significant performance boost with
   *
   * @constructor
   */
  var HttpConfig = ($httpProvider) => {
    $httpProvider.defaults.withCredentials = true;
    if ($httpProvider.defaults.headers['get']) {
      $httpProvider.defaults.headers['get']['If-Modified-Since'] = '0';
    }
  };
  HttpConfig.$inject = ['$httpProvider'];


  angular
    .module(config.ID.Http)
    .config(HttpConfig);

}

