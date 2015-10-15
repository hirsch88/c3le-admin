/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.interfaces {

  export interface ICrudable {
    readAll(): Promise<any>;
    read(id: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
    destroy(id: string): Promise<any>;
  }

}

