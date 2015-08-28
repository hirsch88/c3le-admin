(function () {
  'use strict';

  angular
    .module('c3.core.middleware.Sample', [
      'c3.core.utils.Logger'
    ])
    .run(function (appRouter, Logger) {
      var log = new Logger('c3.core.middleware.Sample');

      appRouter.use(function (start, destination, next, done) {
        log.info('1. Middleware !!!', start, destination);
        next();
      });

      appRouter.use('public', function (start, destination, next, done) {
        log.info('3. Middleware on parent route!!!', start, destination);
        next();
        //or to stop and redirect use -> destination.go(public.home);
      });

    });

}());
