/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.common.services {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IEventsService {
    //init(): Promise<any>;
    hasActiveEvent(): boolean;
    getActiveEventId(): any;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventsService implements IEventsService {
    private backend: c3.common.services.utils.Backend;
    private pristine: boolean = false;
    private activeEvent: models.event.EventModel;
    private log: core.util.Logger;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      c3.common.services.utils.ID.BackendService,
      core.util.ID.Logger
    ];

    constructor(backendService: c3.common.services.utils.BackendService,
                loggerService: core.util.LoggerService) {
      this.backend = backendService.create('/events');
      this.log = loggerService.create(ID.EventsService);
    }


    // PUBLIC API /////////////////////////////////////////////
    init() {
      var promise = this.backend.custom('/acitve').read();
      return promise.then((r) => {
        this.pristine = false;
        this.activeEvent = new common.models.event.EventModel(r);
        this.log.info('activeEvent', this.activeEvent);
        return r;
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
    .module(ID.EventsService, [
      c3.common.services.utils.ID.BackendService,
      core.util.ID.Logger
    ])
    .service(ID.EventsService, EventsService);
}
