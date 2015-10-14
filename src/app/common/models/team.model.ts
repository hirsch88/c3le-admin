/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.common.models {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class TeamModel {
    id: number;
    name: string;
    createdAt: moment.Moment;
    updatedAt: moment.Moment;
    deletedAt: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.name = response['name'];
      this.createdAt = moment(response['createdAt']);
      this.updatedAt = moment(response['updatedAt']);
      this.deletedAt = response['deletedAt'];
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['name'] = this.name;
      data['createdAt'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      data['updatedAt'] = this.updatedAt.format('YYYY-mm-dd HH:MM:SS');
      data['deletedAt'] = this.deletedAt;
      return data;
    }


  }

}
