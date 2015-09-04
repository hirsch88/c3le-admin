/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.common.services {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IEventsService {
    //init(): Promise<any>;
    hasActiveEvent(): boolean;
    getActiveEventId(): string;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventsService implements IEventsService {
    private backend: c3.common.services.utils.Backend;
    private pristine: boolean = false;
    private activeEvent: event.common.models.EventModel;
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
        this.activeEvent = new event.common.models.EventModel(r);
        this.log.info('activeEvent', this.activeEvent);
        return r;
      });
    }


    //init(): Promise<void> {
    //  return new Promise((resolve, reject) => {
    //    this.backend.all()
    //      .custom('/acitve')
    //      .read()
    //      .then((result) => {
    //        this.pristine = false;
    //        this.activeEvent = new event.common.models.EventModel(result);
    //        resolve();
    //      })
    //      .catch(() => reject());
    //  });
    //}

    hasActiveEvent(): boolean {
      return !this.pristine && this.activeEvent !== undefined;
    }

    getActiveEventId(): string {
      return '';
      //return this.hasActiveEvent() ? this.activeEvent.id : undefined;
    }


  }

  angular
    .module(ID.EventsService, [
      c3.common.services.utils.ID.BackendService,
      core.util.ID.Logger
    ])
    .service(ID.EventsService, EventsService);
}
