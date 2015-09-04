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


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      common.services.utils.ID.BackendService
    ];

    constructor(backendService: common.services.utils.BackendService) {
      this.eventBackend = backendService.create('/events/' + 'c3EventsService.getActiveEventId()' + '/users');
      this.backend = backendService.create('/users');
    }

    // PUBLIC API /////////////////////////////////////////////
    getMySelf(): Promise<models.UserModel> {
      return this.backend
        .custom('/self')
        .read()
        .then((res) => new models.UserModel(res));
    }

    readAll(): Promise<any> {
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
    .module(ID.UsersService, [
      common.services.utils.ID.BackendService
    ])
    .service(ID.UsersService, UsersService);
}
