/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.dtos {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IUsersService {

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class UsersService implements IUsersService, core.interfaces.ICrudable {
    private backend: common.services.utils.Backend;
    private eventBackend: common.services.utils.Backend;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      common.services.utils.ID.BackendService
    ];
    constructor(backendService) {
      this.eventBackend = backendService('/events/' + 'c3EventsService.getActiveEventId()' + '/users');
      this.backend = backendService('/users');
    }

    // PUBLIC API /////////////////////////////////////////////
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
