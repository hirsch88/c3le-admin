/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.event.models {
  'use strict';

  // Model ////////////////////////////////////////////////////////////////////
  export class EventModel {
    
    id: number;
    name: string;
    beginDate: Date;
    endDate: string;
    isActive: boolean;
    discountLimit: number;
    created_at: Date;
    updated_at: string;
    deleted_at: any;

    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.name = response['name'];
      this.beginDate = new Date(response['beginDate']);
      this.endDate = response['endDate'];
      this.isActive = response['isActive'];
      this.discountLimit = response['discountLimit'];
      this.created_at = new Date(response['created_at']);
      this.updated_at = response['updated_at'];
      this.deleted_at = response['deleted_at'];
    }

  }

}
