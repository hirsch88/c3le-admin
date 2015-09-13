/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.dtos {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IUsersService {
    getMySelf(): Promise<models.UserModel>;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class UsersService implements IUsersService, core.interfaces.ICrudable {
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

      this.eventBackend = backendService.create(`/events/${eventsService.getActiveEventId()}/users`);
      this.backend = backendService.create('/users');
      this.log = loggerService.create(ID.UsersService);
    }

    // PUBLIC API /////////////////////////////////////////////
    getMySelf() {
      var promise = this.backend.custom('/self').read();
      return promise.then((r) => {
        var user = new models.UserModel(r);
        this.log.info('getMySelf', user);
        return user;
      });
    }

    readAll() {
      var promise = this.eventBackend.all().read();
      return promise.then((r: Array<any>) => {
        var users = r.map((u) => new models.UserModel(u));
        this.log.info('readAll', users);
        return users;
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
    .module(ID.UsersService, [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      event.common.services.ID.EventsService
    ])
    .service(ID.UsersService, UsersService);
}
