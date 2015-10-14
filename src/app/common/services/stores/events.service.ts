/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.stores {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IEventStoreService {
    init(): Promise<any>;
    hasActiveEvent(): boolean;
    getActiveEventId(): any;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventStoreService implements IEventStoreService {
    private pristine: boolean = false;
    private activeEvent: models.event.EventModel;
    private log: core.util.Logger;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      core.util.ID.Logger,
      common.services.rest.event.ID.EventsRestService
    ];

    constructor(loggerService: core.util.LoggerService,
                private eventRestService: common.services.rest.event.EventsRestService) {
      this.log = loggerService.create(ID.EventStoreService);
    }


    // PUBLIC API /////////////////////////////////////////////
    init() {
      var promise = this.eventRestService.readActive();
      return promise.then((activeEvent) => {
          this.pristine = false;
          this.activeEvent = activeEvent;
          this.log.info('activeEvent', this.activeEvent);
      });
    }

    hasActiveEvent(): boolean {
      return !this.pristine && this.activeEvent !== undefined;
    }

    getActiveEventId() {
      return this.hasActiveEvent() ? this.activeEvent.id : '';
    }


  }

  angular
    .module(ID.EventStoreService, [
      core.util.ID.Logger,
      common.services.rest.event.ID.EventsRestService
    ])
    .service(ID.EventStoreService, EventStoreService);
}
