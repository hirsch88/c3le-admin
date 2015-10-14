/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.models.event {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class TeamModel {
    id: number;
    billId: number;
    aboCatalogId: number;
    startDate: any;
    endDate: any;
    credit: any;
    balance: any;
    eventId: number;
    teamName: string;
    checkIn: any;
    checkInMessage: any;
    updatedAt: moment.Moment;
    createdAt: moment.Moment;
    deletedAt: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.billId = response['billId'];
      this.aboCatalogId = response['aboCatalogId'];
      this.startDate = response['startDate'];
      this.endDate = response['endDate'];
      this.credit = response['credit'];
      this.balance = response['balance'];
      this.eventId = response['eventId'];
      this.teamName = response['teamName'];
      this.checkIn = response['checkIn'];
      this.checkInMessage = response['checkInMessage'];
      this.updatedAt = moment(response['updatedAt']);
      this.createdAt = moment(response['createdAt']);
      this.deletedAt = response['deletedAt'];
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['billId'] = this.billId;
      data['aboCatalogId'] = this.aboCatalogId;
      data['startDate'] = this.startDate;
      data['endDate'] = this.endDate;
      data['credit'] = this.credit;
      data['balance'] = this.balance;
      data['eventId'] = this.eventId;
      data['teamName'] = this.teamName;
      data['checkIn'] = this.checkIn;
      data['checkInMessage'] = this.checkInMessage;
      data['updatedAt'] = this.updatedAt.format('YYYY-mm-dd HH:MM:SS');
      data['createdAt'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      data['deletedAt'] = this.deletedAt;
      return data;
    }


  }

}
