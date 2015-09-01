/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.services {
  'use strict';

  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IAuthenticationService {
    signin(): Promise<any>;
    signout(): Promise<any>;
    refresh(): Promise<any>;
    hasValidSession(): boolean;
    getAccessToken(): string;
  }


  // ENTITY ////////////////////////////////////////////////////////////////////
  class AuthenticatioSession {

    public accessToken: string = '';
    public tokentype: string = '';
    public expiresIn: number = 0;
    public refreshToken: string = '';

    constructor(obj?: any) {
      if (_.isObject(obj)) {
        this.accessToken = obj['access_token'] || '';
        this.tokentype = obj['token_type'] || '';
        this.expiresIn = obj['expires_in'] || 0;
        this.refreshToken = obj['refresh_token'] || '';
      }
    }

  }


  // SERVICE ////////////////////////////////////////////////////////////////////
  export class AuthenticationService implements IAuthenticationService {
    private session: AuthenticatioSession = new AuthenticatioSession();

    static apiPath = '/oauth/token';

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$http',
      core.constants.ID.AppConfig
    ];

    constructor(private $http: ng.IHttpService,
                private config: core.constants.IAppConfig) {

    }


    // PUBLIC API /////////////////////////////////////////////
    signin(): Promise<any> {
      return new Promise((resolve, reject) => {

      });
    }

    signout(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.session = new AuthenticatioSession();
        resolve();
      });
    }

    refresh(): Promise<any> {
      return new Promise((resolve, reject) => {

      });
    }

    getAccessToken(): string {
      return this.session.accessToken;
    }

    hasValidSession(): boolean {
      return this.getAccessToken() !== '';
    }

    // PRIVATE API ////////////////////////////////////////////


  }

  angular
    .module(ID.AuthenticationService, [])
    .service(ID.AuthenticationService, AuthenticationService);
}
