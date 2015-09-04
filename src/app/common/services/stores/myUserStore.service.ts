/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.stores {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IMyUserStoreService {

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class MyUserStoreService implements IMyUserStoreService {
    private store: models.UserModel;
    private promise: Promise<models.UserModel>;


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      common.services.dtos.ID.UsersService
    ];

    constructor(private userService: common.services.dtos.UsersService) {
    }

    // PUBLIC API /////////////////////////////////////////////
    get() {
      return new Promise<models.UserModel>((resolve) => {
        var addListener = () => {
          this.promise.then((r) => {
            this.store = r;
            resolve(this.store);
          });
        };

        if (this.promise) {
          if (this.promise.isFulfilled()) {
            resolve(this.store);
          } else {
            if (this.promise.isPending()) {
              addListener();
            } else {
              this.load();
              addListener();
            }
          }
        } else {
          this.load();
          addListener();
        }
      });
    }

    // PRIVATE API ////////////////////////////////////////////
    private load() {
      this.promise = this.userService.getMySelf();
    }


  }

  angular
    .module(ID.MyUserStoreService, [
      common.services.dtos.ID.UsersService
    ])
    .service(ID.MyUserStoreService, MyUserStoreService);
}
