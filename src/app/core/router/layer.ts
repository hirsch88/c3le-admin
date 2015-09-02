/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.router {
  'use strict';

  export class AppRouterLayer {
    route: string;

    constructor(private handleFn: Function, route) {
      this.route = route || '';
    }

    handle(start, destination, next, done) {
      this.handleFn(start, destination, next, done);
    }

    hasRoute() {
      return this.route && this.route !== '';
    }

    matchesState(stateName) {
      return stateName.indexOf(this.route) === 0;
    }

  }

}
