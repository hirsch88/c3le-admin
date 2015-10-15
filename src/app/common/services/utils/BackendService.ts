/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.utils {
  'use strict';

  /**
   * REQUEST
   */
    // SERVICE ////////////////////////////////////////////////////////////////////
  export class Request {
    path: string = '';

    constructor(path,
                private $http,
                private appConfig: core.constants.IAppConfig,
                private authenticationService: auth.services.AuthenticationService) {
      this.path = path || '';
      this.path = this.appConfig.BASE_URL + this.path;
    }

    create(data: any, params?: any) {
      return this.send('POST', data, params);
    }

    read(params?: any) {
      return this.send('GET', undefined, params);
    }

    update(data: any, params?: any) {
      return this.send('PUT', data, params);
    }

    destroy(params?: any) {
      return this.send('DELETE', undefined, params);
    }

    custom(path: string) {
      this.path += path;
      return this;
    }

    private send(method: string, data: any, params?: any) {
      var request = {
        method: method || 'GET',
        url: this.path,
        headers: {
          Authorization: 'Bearer ' + this.authenticationService.getAccessToken()
        }
      };
      if (data) {
        request['data'] = data;
      }
      if (params) {
        request['params'] = params;
      }
      return new Promise((resolve, reject) => {
        this.$http(request)
          .success((data, status, headers, config) => {
            resolve(data);
          })
          .error((data, status, headers, config) => {
            if (status === 401) {
              this.authenticationService
                .refresh()
                .then(() => this.send(method, data, params))
                .then(resolve)
                .catch(reject);
            } else {
              reject({
                data: data,
                status: status,
                headers: headers,
                config: config
              });
            }
          });
      });
    }

  }

  /**
   * UNIQUE REQUEST
   */
  export class UniqueRequest extends Request {
    id: string;

    constructor(id,
                path,
                $http,
                appConfig: core.constants.IAppConfig,
                authenticationService: auth.services.AuthenticationService) {
      super(this.path, $http, appConfig, authenticationService);
      this.id = id;
      this.path += '/' + this.id;
    }

  }

  /**
   * BACKEND
   */
  export class Backend {
    path: string = '';

    constructor(path: string,
                private $http,
                private appConfig: core.constants.IAppConfig,
                private authenticationService: auth.services.AuthenticationService) {
      this.path = path;
    }

    all() {
      return new Request(this.path, this.$http, this.appConfig, this.authenticationService);
    }

    one(id: any) {
      return new UniqueRequest(id.toString(), this.path, this.$http, this.appConfig, this.authenticationService);
    }

    create(data: any, params?: any) {
      return new Request(this.path, this.$http, this.appConfig, this.authenticationService)
        .create(data, params);
    }

    custom(path) {
      return new Request(this.path + path, this.$http, this.appConfig, this.authenticationService);
    }


  }

  /**
   * BACKEND SERVICE
   */
    // INTERFACE //////////////////////////////////////////////////////////////////
  interface IBackendService {
  }

  // SERVICE ////////////////////////////////////////////////////////////////////
  export class BackendService implements IBackendService {


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$http',
      core.constants.ID.AppConfig,
      auth.services.ID.AuthenticationService
    ];

    constructor(private $http,
                private appConfig: core.constants.IAppConfig,
                private authenticationService: auth.services.AuthenticationService) {
    }

    create(path: string) {
      return new Backend(path, this.$http, this.appConfig, this.authenticationService);
    }

  }

  angular
    .module(ID.BackendService, [
      core.constants.ID.AppConfig,
      auth.services.ID.AuthenticationService
    ])
    .service(ID.BackendService, BackendService);

}
