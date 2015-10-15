/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.models.event {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class BikeModel {
    id: number;
    bikeNr: number;
    status: string;
    row: number;
    column: number;
    aboBookingId: number;
    stage: boolean;
    eventId: number;
    updatedAt: moment.Moment;
    createdAt: moment.Moment;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.bikeNr = response['bikeNr'];
      this.status = response['status'];
      this.row = response['row'];
      this.column = response['column'];
      this.aboBookingId = response['aboBookingId'];
      this.stage = response['stage'];
      this.eventId = response['eventId'];
      this.updatedAt = moment(response['updatedAt']);
      this.createdAt = moment(response['createdAt']);
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['bikeNr'] = this.bikeNr;
      data['status'] = this.status;
      data['row'] = this.row;
      data['column'] = this.column;
      data['aboBookingId'] = this.aboBookingId;
      data['stage'] = this.stage;
      data['eventId'] = this.eventId;
      data['updatedAt'] = this.updatedAt.format('YYYY-mm-dd HH:MM:SS');
      data['createdAt'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      return data;
    }


  }

}
