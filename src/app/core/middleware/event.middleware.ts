/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.middleware {
  'use strict';

  function eventMiddleware(appRouter: router.AppRouter, eventsService: event.common.services.EventsService) {
    appRouter.use('admin.event', (start, destination, next, done, abort) => {
      if (!eventsService.hasActiveEvent()) {
        eventsService.init()
          .then(() => next());
      } else {
        next();
      }
    });
  }

  eventMiddleware.$inject = [
    router.ID.Router,
    event.common.services.ID.EventsService
  ];

  angular
    .module(ID.Event, [
      router.ID.Router,
      event.common.services.ID.EventsService
    ])
    .run(eventMiddleware);
}
