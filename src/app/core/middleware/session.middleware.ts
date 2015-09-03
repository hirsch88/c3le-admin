/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.middleware {
  'use strict';

  function SessionMiddleware(appRouter: router.AppRouter) {
    appRouter.use('admin', (start, destination, next, done, abort) => {
      console.log('SessionMiddleware');
      next();
    });
  }

  SessionMiddleware.$inject = [
    router.ID.Router,

  ];

  angular
    .module(ID.Session, [
      router.ID.Router,

    ])
    .run(SessionMiddleware);
}

