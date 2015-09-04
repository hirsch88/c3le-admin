/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.common.models {
  'use strict';

  // MODEL ////////////////////////////////////////////////////////////////////
  export class UserModel {
    id: number;
    email: string;
    fname: string;
    lname: string;
    gender: string;
    street: any;
    location: any;
    countryId: any;
    phone: any;
    isLocked: boolean;
    birthday: moment.Moment;
    roleId: string;
    createdAt: moment.Moment;
    updatedAt: moment.Moment;
    deletedAt: any;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(response: any) {
      this.id = response['id'];
      this.email = response['email'];
      this.fname = response['fname'];
      this.lname = response['lname'];
      this.gender = response['gender'];
      this.street = response['street'];
      this.location = response['location'];
      this.countryId = response['countryId'];
      this.phone = response['phone'];
      this.isLocked = response['isLocked'];
      this.birthday = moment(response['birthday']);
      this.roleId = response['roleId'];
      this.createdAt = moment(response['created_at']);
      this.updatedAt = moment(response['updated_at']);
      this.deletedAt = response['deleted_at'];
    }


    // PUBLIC API /////////////////////////////////////////////
    mapDataForApi() {
      var data = {};
      data['id'] = this.id;
      data['email'] = this.email;
      data['fname'] = this.fname;
      data['lname'] = this.lname;
      data['gender'] = this.gender;
      data['street'] = this.street;
      data['location'] = this.location;
      data['countryId'] = this.countryId;
      data['phone'] = this.phone;
      data['isLocked'] = this.isLocked;
      data['birthday'] = this.birthday.format('YYYY-mm-dd HH:MM:SS');
      data['roleId'] = this.roleId;
      data['created_at'] = this.createdAt.format('YYYY-mm-dd HH:MM:SS');
      data['updated_at'] = this.updatedAt.format('YYYY-mm-dd HH:MM:SS');
      data['deleted_at'] = this.deletedAt;
      return data;
    }

    getFullName(): string {
      return this.fname + ' ' + this.lname;
    }


  }

}
