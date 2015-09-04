/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.common.services {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IEventsService {
    init(): Promise<any>;
    hasActiveEvent(): boolean;
    getActiveEventId(): string;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventsService implements IEventsService {
    private backend: c3.common.services.utils.Backend;
    private pristine: boolean = false;
    private activeEvent: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      c3.common.services.utils.ID.BackendService
    ];

    constructor(backendService: c3.common.services.utils.BackendService) {
      this.backend = backendService.create('/events');
    }


    // PUBLIC API /////////////////////////////////////////////
    init(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.backend.all()
          .custom('/acitve')
          .read()
          .then((result) => {
            this.pristine = false;
            this.activeEvent = result;
            resolve(result);
          })
          .catch(reject);
      });
    }

    hasActiveEvent(): boolean {
      return !this.pristine && this.activeEvent !== undefined;
    }

    getActiveEventId(): string {
      return this.hasActiveEvent() ? this.activeEvent.id : undefined;
    }


  }

  angular
    .module(ID.EventsService, [
      c3.common.services.utils.ID.BackendService
    ])
    .service(ID.EventsService, EventsService);
}
