/// <reference path="../../../../typings/tsd.d.ts"/>

/**
 * Event bus. Use this class to register events and broadcast them from anywhere.
 */
module c3.core.util {
  'use strict';


  export class Logger {

    constructor(private name: string,
                private $log: ng.ILogService,
                private appConfig: core.constants.IAppConfig) {

    }

    // PUBLIC API /////////////////////////////////////////////
    info(text: string, object: any) {
      this.pop('info', text, object);
    }

    warn(text: string, object: any) {
      this.pop('warn', text, object);
    }

    error(text: string, object: any) {
      this.pop('error', text, object);
    }

    // PRIVATE API ////////////////////////////////////////////
    private pop(type: string, text: string, object: any): void {
      if (this.appConfig.ENVIRONMENT !== 'production') {

        object = (_.isObject(text) || _.isArray(text))
          ? text
          : object;

        text = (_.isObject(text) || _.isArray(text))
          ? undefined
          : text;

        text = text || '';

        if (_.isBoolean(object)) {
          object = (object) ? 'YES' : 'NO';
        }

        object = object || '';

        var arrow = (text !== '' || object !== '') ? '=> ' : '';
        this.$log[type]('[' + this.getTimestamp() + ' - ' + this.name + '] ' + arrow + text, object);
      }
    }

    private getTimestamp(): string {
      return moment().format('HH:mm:ss.ms');
    }

  }

  export class LoggerService {

    static $inject = [
      '$log',
      core.constants.ID.AppConfig
    ];

    constructor(private $log: ng.ILogService,
                private appConfig: core.constants.IAppConfig) {
    }

    create(name: string) {
      return new Logger(name, this.$log, this.appConfig);
    }

  }

  angular
    .module(ID.Logger, [
      core.constants.ID.AppConfig
    ])
    .service(ID.Logger, LoggerService);
}
