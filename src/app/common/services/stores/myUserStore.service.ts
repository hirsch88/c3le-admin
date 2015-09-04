/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.stores {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IMyUserStoreService {

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class MyUserStoreService implements IMyUserStoreService {
    private store;
    private promise: Promise<models.UserModel>;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      common.services.dtos.ID.UsersService
    ];

    constructor(private userService: common.services.dtos.UsersService) {
    }

    // PUBLIC API /////////////////////////////////////////////
    load() {
      this.promise = this.userService.getMySelf();
      return this.promise;
    }

    get() {
      if (this.promise && this.promise.isFulfilled()) {
        return new Promise((resolve) => {
          resolve(this.store);
        });
      } else if (this.promise && this.promise.isPending()) {
        return this.promise;
      } else {
        return this.load();
      }
    }

    // PRIVATE API ////////////////////////////////////////////


  }

  angular
    .module(ID.MyUserStoreService, [
      common.services.dtos.ID.UsersService
    ])
    .service(ID.MyUserStoreService, MyUserStoreService);
}
