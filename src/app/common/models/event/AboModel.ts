/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.models.event {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class AboModel {
    id: number;
    name: string;
    updatedAt: moment.Moment;
    createdAt: moment.Moment;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.name = response['name'];
      this.updatedAt = moment(response['updatedAt']);
      this.createdAt = moment(response['createdAt']);
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['name'] = this.name;
      data['updatedAt'] = this.updatedAt.format('YYYY-mm-dd HH:MM:SS');
      data['createdAt'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      return data;
    }


  }

}
