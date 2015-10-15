/// <reference path="../../../../../../typings/tsd.d.ts"/>

module c3.common.services.rest.event {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface ITeamsRestService {

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class TeamsRestService implements ITeamsRestService, core.interfaces.ICrudable {
    static $inject = [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      common.services.stores.ID.EventStoreService
    ];

    private backend: common.services.utils.Backend;
    private eventBackend: common.services.utils.Backend;
    private log: core.util.Logger;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(backendService: common.services.utils.BackendService,
                loggerService: core.util.LoggerService,
                eventsService: common.services.stores.EventStoreService) {

      this.eventBackend = backendService.create(`/events/${eventsService.getActiveEventId()}/teams`);
      this.backend = backendService.create('/teams');
      this.log = loggerService.create(ID.TeamsRestService);
    }

    // PUBLIC API /////////////////////////////////////////////
    readAll() {
      var promise = this.eventBackend.all().read();
      return promise.then((r: Array<any>) => {
        var teams = r.map((d) => new models.event.TeamModel(d));
        this.log.info('readAll', teams);
        return teams;
      });
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
    .module(ID.TeamsRestService, [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      common.services.stores.ID.EventStoreService
    ])
    .service(ID.TeamsRestService, TeamsRestService);
}
