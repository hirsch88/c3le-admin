/// <reference path="../../../../../../typings/tsd.d.ts"/>

module c3.common.services.rest.event {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IEventsRestService {
    readActive(): Promise<models.event.EventModel>
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventsRestService implements IEventsRestService, core.interfaces.ICrudable {
    static $inject = [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
    ];

    private backend: common.services.utils.Backend;
    private log: core.util.Logger;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(backendService: common.services.utils.BackendService,
                loggerService: core.util.LoggerService) {

      this.backend = backendService.create('/events');
      this.log = loggerService.create(ID.EventsRestService);
    }


    // PUBLIC API /////////////////////////////////////////////
    readActive() {
      var promise = this.backend.custom('/acitve').read();
      return promise.then((r) => new models.event.EventModel(r));
    }

    readAll() {
      return undefined;
    }

    read(id: string): Promise<any> {
      return undefined;
    }

    create(data: any): Promise<any> {
      return undefined;
    }

    update(id: string): Promise<any> {
      return undefined;
    }

    destroy(id: string): Promise<any> {
      return undefined;
    }


    // PRIVATE API ////////////////////////////////////////////


  }

  angular
    .module(ID.EventsRestService, [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger
    ])
    .service(ID.EventsRestService, EventsRestService);
}
