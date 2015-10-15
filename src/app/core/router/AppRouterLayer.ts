/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.router {
  'use strict';

  export class AppRouterLayer {
    route: string;

    constructor(private handleFn: Function, route?: string) {
      this.route = route || '';
    }

    handle(start, destination, next, done, abort) {
      this.handleFn(start, destination, next, done, abort);
    }

    hasRoute() {
      return this.route && this.route !== '';
    }

    matchesState(stateName) {
      return stateName.indexOf(this.route) === 0;
    }

  }

}
