/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.event.common.models {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class EventModel {
    id: number;
    name: string;
    beginDate: moment.Moment;
    endDate: string;
    isActive: boolean;
    discountLimit: number;
    createdAt: moment.Moment;
    updatedAt: string;
    deletedAt: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.name = response['name'];
      this.beginDate = moment(response['beginDate']);
      this.endDate = response['endDate'];
      this.isActive = response['isActive'];
      this.discountLimit = response['discountLimit'];
      this.createdAt = moment(response['created_at']);
      this.updatedAt = response['updated_at'];
      this.deletedAt = response['deleted_at'];
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['name'] = this.name;
      data['beginDate'] = this.beginDate.format('YYYY-mm-dd HH:MM:SS');
      data['endDate'] = this.endDate;
      data['isActive'] = this.isActive;
      data['discountLimit'] = this.discountLimit;
      data['created_at'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      data['updated_at'] = this.updatedAt;
      data['deleted_at'] = this.deletedAt;
      return data;
    }


  }

}
