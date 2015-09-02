/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.dtos {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IUsersService {

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class UsersService implements IUsersService, core.interfaces.ICrudable {
    private field;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [

    ];
    constructor() {
      this.field = 'value';
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

    ])
    .service(ID.UsersService, UsersService);
}
