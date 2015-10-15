/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.router {
  'use strict';

  export class AppRouterDestination {

    constructor(private state,
                private params,
                private $state) {
    }

    go(stateName: string, params?: any) {
      params = params || {};
      this.$state.go(stateName, params, {
        location: 'replace'
      });
    }

  }

}
