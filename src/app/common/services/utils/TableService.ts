/// <reference path="../../../../../typings/tsd.d.ts"/>

module c3.common.services.utils {
  'use strict';


  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface ITableService {
    filterValue: string;
    orderValue: string;
    isRevert: boolean;
    setOrderBy(colName: string);
    getOrderClass(colName: string);
  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class TableService implements ITableService {

    filterValue: string;
    orderValue: string;
    isRevert: boolean;

    // CONSTRUCTOR /////////////////////////////////////////////
    constructor() {
      this.filterValue = '';
      this.orderValue = 'id';
      this.isRevert = false;
    }


    // PUBLIC API /////////////////////////////////////////////
    setOrderBy(colName: string) {
      if (this.orderValue === colName) {
        this.isRevert = !this.isRevert;
      } else {
        this.orderValue = colName;
        this.isRevert = false;
      }
    }

    getOrderClass(colName: string) {
      if (colName === this.orderValue) {
        if (this.isRevert) {
          return 'sorting_desc';
        } else {
          return 'sorting_asc';
        }
      } else {
        return 'sorting';
      }
    }


  }

  // FACTORY ////////////////////////////////////////////////////////////////////
  export class TableFactory implements c3.core.interfaces.ICreatable {
    constructor() {
      ;
    }

    create(): TableService {
      return new TableService();
    }
  }


  angular
    .module(ID.TableService, [])
    .service(ID.TableService, TableFactory);
}
