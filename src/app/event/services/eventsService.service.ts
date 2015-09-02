/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.event.services {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IEventsService {
    init(): Promise<any>;
    hasActiveEvent(): boolean;
    getActiveEventId(): string;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventsService implements IEventsService {
    private backend: common.services.utils.Backend;
    private pristine: boolean = false;
    private activeEvent: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      common.services.utils.ID.BackendService
    ];

    constructor(backendService: common.services.utils.BackendService) {
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
      common.services.utils.ID.BackendService
    ])
    .service(ID.EventsService, EventsService);
}
