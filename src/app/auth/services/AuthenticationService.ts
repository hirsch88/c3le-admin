/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.services {
  'use strict';

  // INTERFACE ////////////////////////////////////////////////////////////////////
  interface IAuthenticationService {
    signin(email: string, password: string): Promise<any>;
    signout(): Promise<any>;
    refresh(): Promise<any>;
    hasValidSession(): boolean;
    getAccessToken(): string;
  }


  // ENTITY ////////////////////////////////////////////////////////////////////
  class AuthenticationSession {

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
    // STATIC /////////////////////////////////////////////
    static $inject = [
      '$http',
      core.config.ID.AppConfig
    ];
    static API_PATH = '/oauth/token';


    // VARIABLES /////////////////////////////////////////////
    private session: AuthenticationSession = new AuthenticationSession();


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor(private $http: ng.IHttpService,
                private appConfig: core.config.AppConfig) {

    }


    // PUBLIC API /////////////////////////////////////////////
    signin(email: string, password: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this.$http.post(this.appConfig.backendUrl + AuthenticationService.API_PATH, {
          'username': email || '',
          'password': password || '',
          'grant_type': 'password',
          'client_id': this.appConfig.client_id,
          'client_secret': this.appConfig.client_secret
        }, {
          ignoreLoadingBar: true
        })
          .success((res) => {
            this.session = new AuthenticationSession(res);
            resolve(undefined);
          })
          .error(reject);
      });
    }

    signout(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.session = new AuthenticationSession();
        resolve(undefined);
      });
    }

    refresh(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.$http.post(this.appConfig.backendUrl + AuthenticationService.API_PATH, {
          'refresh_token': this.session.refreshToken,
          'grant_type': 'refresh_token',
          'client_id': this.appConfig.client_id,
          'client_secret': this.appConfig.client_secret
        })
          .success(function (res) {
            this.session = new AuthenticationSession(res);
            resolve(undefined);
          })
          .error(reject);
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
    .module(ID.AuthenticationService, [
      core.config.ID.AppConfig
    ])
    .service(ID.AuthenticationService, AuthenticationService);
}
