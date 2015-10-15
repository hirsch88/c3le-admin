/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.layout.services {
  'use strict';

  export class SidebarItem {
    constructor(private _key: string,
                private _translateId: string,
                private _iconClass: string,
                private _state: string,
                private _environment: string,
                private _position: Number) {
    }

    get key(): string {
      return this._key;
    }

    get translateId(): string {
      return this._translateId;
    }

    get iconClass(): string {
      return this._iconClass;
    }

    get state(): string {
      return this._state;
    }

    get environment(): string {
      return this._environment;
    }

    get position(): Number {
      return this._position;
    }

  }

  export class SidebarService {

    private stack: Array<SidebarItem> = [];

    static $inject = [];

    constructor() {
      ;
    }

    push(key: string, translateId: string, iconClass: string, state: string, environment: string, position: Number = 99) {
      this.stack.push(new SidebarItem(key, translateId, iconClass, state, environment, position));
    }

    get(environment: string) {
      return this.stack.filter((si) => environment === si.environment);
    }

    getEnvironments() {
      return this.stack
        .map((si) => si.environment)
        .filter((elem, idx, self) => self.indexOf(elem) === idx);
    }


  }

  angular
    .module(ID.SidebarService, [])
    .service(ID.SidebarService, SidebarService);
}
