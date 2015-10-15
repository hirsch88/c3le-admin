/// <reference path="../../../../../../typings/tsd.d.ts"/>

module c3.common.services.rest.event {
  'use strict';

  // SERVICE ////////////////////////////////////////////////////////////////////
  export class EventAboRestService extends AbosRestService implements core.interfaces.ICrudable {
    static $inject = [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      stores.ID.EventStoreService
    ];

    private eventBackend: common.services.utils.Backend;
    private log: core.util.Logger;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(backendService: common.services.utils.BackendService,
                loggerService: core.util.LoggerService,
                eventStoreService: stores.EventStoreService) {
      super(backendService);

      this.eventBackend = backendService.create(`/events/${eventStoreService.getActiveEventId()}/abos`);
      this.log = loggerService.create(ID.EventAboRestService);
    }


    // PUBLIC API /////////////////////////////////////////////
    readAll() {
      var promise = super.readAll();
      return promise.then((r: Array<any>) => {
        var abos = r.map((d) => new models.event.AboModel(d));
        this.log.info('readAll', abos);
        return abos;
      });
    }

    read(id: string): Promise<any> {
      //var promise = super.read(id);
      return undefined;
    }

    create(data: any): Promise<any> {
      //var promise = super.create(data);
      return undefined;
    }

    update(id: string, data: any): Promise<any> {
      //var promise = super.update(id, data);
      return undefined;
    }

    destroy(id: string): Promise<any> {
      //var promise = super.destroy(id);
      return undefined;
    }


    // PRIVATE API ////////////////////////////////////////////


  }

  angular
    .module(ID.EventAboRestService, [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      stores.ID.EventStoreService
    ])
    .service(ID.EventAboRestService, EventAboRestService);
}
