/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.common.util {
  'use strict';

  export class Lazy<T> {
    private instance: T;

    constructor(private factory: () => T) { }

    get isCreated() {
      return !!this.instance;
    }

    get value() {
      return this.instance || (this.instance = this.factory());
    }

    reset = () => {
      this.instance = undefined;
      return this;
    }
  }
}
