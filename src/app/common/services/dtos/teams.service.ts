/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.dtos {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface ITeamsService {

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class TeamsService implements ITeamsService, core.interfaces.ICrudable {
    private backend: common.services.utils.Backend;
    private eventBackend: common.services.utils.Backend;
    private log: core.util.Logger;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      event.common.services.ID.EventsService
    ];

    constructor(backendService: common.services.utils.BackendService,
                loggerService: core.util.LoggerService,
                eventsService: event.common.services.EventsService) {

      this.eventBackend = backendService.create(`/events/${eventsService.getActiveEventId()}/teams`);
      this.backend = backendService.create('/teams');
      this.log = loggerService.create(ID.TeamsService);
    }

    // PUBLIC API /////////////////////////////////////////////
    readAll() {
      var promise = this.eventBackend.all().read();
      return promise.then((r: Array<any>) => {
        var teams = r.map((d) => new models.TeamModel(d));
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
    .module(ID.TeamsService, [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      event.common.services.ID.EventsService
    ])
    .service(ID.TeamsService, TeamsService);
}
