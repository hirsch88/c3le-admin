/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.rest {
  'use strict';


  /**
   * @name AbosRestService
   * @description
   * This is a service class to extend for the event and club
   * area. Do not use this class in controllers.
   *
   */
  export class AbosRestService {
    private backend: common.services.utils.Backend;

    constructor(backendService: common.services.utils.BackendService) {
      this.backend = backendService.create('/abos');
    }

    protected readAll() {
      return this.backend.all().read();
    }

    protected read(id: string): Promise<any> {
      return undefined;
    }

    protected create(data: any): Promise<any> {
      return undefined;
    }

    protected update(id: string, data: any): Promise<any> {
      return undefined;
    }

    protected destroy(id: string): Promise<any> {
      return undefined;
    }

  }

}
