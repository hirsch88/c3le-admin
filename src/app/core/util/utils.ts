/// <reference path="../../../../typings/tsd.d.ts"/>

/**
 * Event bus. Use this class to register events and broadcast them from anywhere.
 */
module c3.core.util {
  'use strict';


  export class Utils {

    static isDefinded(value: any) {
      return value !== undefined && value !== null && value !== '';
    }

    static includes(string: string, search: string) {
      return string.indexOf(search) > -1;
    }

    static joinModule() {
      var f = (p) => {
        if (!_.isString(p)) {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      };

      var paths = Array.prototype.filter.call(arguments, f);
      var joined = paths.join('.');
      if (!/^[.\/]{2}[^.\/]/.test(paths[0])) {
        joined = joined.replace(/^[.\/]{2,}/, '.');
      }
      return joined;
    }

    static joinPath() {
      var f = (p) => {
        if (!_.isString(p)) {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      };

      var paths = Array.prototype.filter.call(arguments, f);
      var joined = paths.join('//');
      if (!/^[//\/]{2}[^//\/]/.test(paths[0])) {
        joined = joined.replace(/^[//\/]{2,}/, '//');
      }
      return joined;
    }

    static templateUrl(module: string, templateName?: string) {
      var paths = module.split('.');
      var isDirective = Utils.includes(module, 'directives');
      paths[0] = 'app';
      paths[paths.length - 1] = templateName || (paths[paths.length - 1]);
      if (templateName === undefined && isDirective) {
        paths[paths.length - 1] += '.directive';
      }
      paths[paths.length - 1] += '.html';
      return (paths.join('/'))
        .toLowerCase();
    }


  }

}






