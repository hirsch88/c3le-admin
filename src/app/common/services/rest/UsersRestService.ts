/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.rest {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IUsersRestService {
    getMySelf(): Promise<models.UserModel>;
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class UsersRestService implements IUsersRestService, core.interfaces.ICrudable {
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

      this.eventBackend = backendService.create(`/events/${eventsService.getActiveEventId()}/users`);
      this.backend = backendService.create('/users');
      this.log = loggerService.create(ID.UsersRestService);
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
    .module(ID.UsersRestService, [
      common.services.utils.ID.BackendService,
      core.util.ID.Logger,
      common.services.stores.ID.EventStoreService
    ])
    .service(ID.UsersRestService, UsersRestService);
}
