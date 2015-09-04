/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.middleware {
  'use strict';

  function EventMiddleware(appRouter: router.AppRouter) {
    appRouter.use('admin.event', (start, destination, next, done, abort) => {
      console.log('EventMiddleware');
      next();
    });
  }

  EventMiddleware.$inject = [
    router.ID.Router
    //event.services.ID.EventsService
  ];

  angular
    .module(ID.Event, [
      router.ID.Router
      //event.services.ID.EventsService
    ])
    .run(EventMiddleware);
}

//
//(function() {
//  'use strict';
//
//  angular
//    .module('c3.core.middleware.Event', [
//      'c3.core.router.Router',
//      'c3.core.utils.Logger',
//      'c3.event.services.EventsService'
//    ])
//    .run(function(appRouter, Logger, c3EventsService) {
//      var log = new Logger('c3.core.middleware.Event');
//
//      appRouter.use('admin.event', function(start, destination, next, done) {
//        if (!c3EventsService.hasActiveEvent()) {
//          c3EventsService.init()
//            .then(function() {
//              next();
//            });
//        } else {
//          next();
//        }
//
//      });
//
//    });
//
//}());
