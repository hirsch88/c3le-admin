/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.middleware {
  'use strict';

  var SessionMiddleware = (appRouter: router.AppRouter, authenticationService: auth.services.AuthenticationService) => {
    appRouter.use('admin', (start, destination, next, done, abort) => {
      if (destination.state.data && destination.state.data.session === true
        && !authenticationService.hasValidSession()) {
        destination.go('public.signin');
      } else {
        next();
      }
    });
  };

  SessionMiddleware.$inject = [
    router.ID.Router,
    auth.services.ID.AuthenticationService
  ];

  angular
    .module(ID.Session, [
      router.ID.Router,
      auth.services.ID.AuthenticationService
    ])
    .run(SessionMiddleware);
}

