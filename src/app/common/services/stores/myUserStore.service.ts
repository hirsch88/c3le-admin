///// <reference path="../../../../../typings/tsd.d.ts"/>
//
//module c3.common.services.stores {
//  'use strict';
//
//
//  // INTERFACE ////////////////////////////////////////////////////////////////////
//  interface IMyUserStoreService {
//
//  }
//
//
//  // SERVICE ////////////////////////////////////////////////////////////////////
//  export class MyUserStoreService implements IMyUserStoreService {
//    private store: models.UserModel;
//    private promise: Promise<models.UserModel>;
//
//
//    // CONSTRUCTOR /////////////////////////////////////////////
//    static $inject = [
//      common.services.dtos.ID.UsersService
//    ];
//
//    constructor(private userService: common.services.dtos.UsersService) {
//    }
//
//    // PUBLIC API /////////////////////////////////////////////
//    load() {
//      ;
//    }
//
//    get() {
//      return this.userService.getMySelf();
//    }
//
//    // PRIVATE API ////////////////////////////////////////////
//
//
//  }
//
//  angular
//    .module(ID.MyUserStoreService, [
//      common.services.dtos.ID.UsersService
//    ])
//    .service(ID.MyUserStoreService, MyUserStoreService);
//}
