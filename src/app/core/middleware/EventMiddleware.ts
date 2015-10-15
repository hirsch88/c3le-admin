/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.middleware {
  'use strict';

  var EventMiddleware = (appRouter: router.AppRouter, eventsService: common.services.stores.EventStoreService) => {
    appRouter.use('admin.event', (start, destination, next, done, abort) => {
      if (!eventsService.hasActiveEvent()) {
        eventsService.init()
          .then(() => next());
      } else {
        next();
      }
    });
  };

  EventMiddleware.$inject = [
    router.ID.Router,
    common.services.stores.ID.EventStoreService
  ];

  angular
    .module(ID.Event, [
      router.ID.Router,
      common.services.stores.ID.EventStoreService
    ])
    .run(EventMiddleware);
}
