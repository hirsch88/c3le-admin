/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.common.models {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class BillModel {
    id: number;
    userId: number;
    description: string;
    notification: string;
    payDate: moment.Moment;
    payStatus: string;
    updatedAt: moment.Moment;
    createdAt: moment.Moment;
    deletedAt: any;
    user: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.userId = response['userId'];
      this.description = response['description'];
      this.notification = response['notification'];
      this.payDate = moment(response['payDate']);
      this.payStatus = response['payStatus'];
      this.updatedAt = moment(response['updatedAt']);
      this.createdAt = moment(response['createdAt']);
      this.deletedAt = response['deletedAt'];
      this.user = response['user'];
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['userId'] = this.userId;
      data['description'] = this.description;
      data['notification'] = this.notification;
      data['payDate'] = this.payDate.format('YYYY-mm-dd HH:MM:SS');
      data['payStatus'] = this.payStatus;
      data['updatedAt'] = this.updatedAt.format('YYYY-mm-dd HH:MM:SS');
      data['createdAt'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      data['deletedAt'] = this.deletedAt;
      data['user'] = this.user;
      return data;
    }


  }

}
