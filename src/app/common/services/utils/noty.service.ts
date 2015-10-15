/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.utils {
  'use strict';

  // INTERFACE //////////////////////////////////////////////////////////////////
  interface INotyService {
    busy(text: string): Promise<any>;
    alert(text: string, values?: any): Promise<any>;
    success(text: string, values?: any): Promise<any>;
    info(text: string, values?: any): Promise<any>;
    warn(text: string, values?: any): Promise<any>;
    danger(text: string, values?: any): Promise<any>;
    error(text: string, values?: any): Promise<any>;
  }

  // SERVICE ////////////////////////////////////////////////////////////////////
  export class NotyService implements INotyService {


    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$translate'
    ];

    constructor(private $translate) {
    }


    // PUBLIC API /////////////////////////////////////////////
    busy(text?: string) {
      text = text || 'MESSAGE.LOADING.DEFAULT';
      return this.pop('busy', text);
    }

    alert(text: string, values?: any) {
      return this.pop('alert', text, values);
    }

    success(text: string, values?: any) {
      return this.pop('success', text, values);
    }

    info(text: string, values?: any) {
      return this.pop('information', text, values);
    }

    warn(text: string, values?: any) {
      return this.pop('warning', text, values);
    }

    danger(text: string, values?: any) {
      return this.pop('error', text, values);
    }

    error(text: string, values?: any) {
      return this.pop('error', text, values);
    }


    // PRIVATE API ////////////////////////////////////////////
    private pop(type: string, text: string, values?: any, timeout?: number) {
      return new Promise((resolve, reject) => {
        timeout = timeout || 5000;
        values = values || {};

        this.$translate(text, values)
          .then(function (translation) {
            resolve(noty({
                type: type,
                text: translation
                timeout: timeout
              })
            );
          })
          .catch(function () {
            resolve(noty({
                type: type,
                text: text
                timeout: timeout
              })
            );
          });

      });
    }


  }

  angular
    .module(ID.NotyService, [])
    .service(ID.NotyService, NotyService);

  /**
   * Noty Theme wtNoty
   * @type {Object}
   */
  $.noty['themes'].wtNoty = {
    name: 'wtNoty',

    style: function () {

      if (this.options.type !== 'busy') {
        this['$message'].find('span').before('<i class="noty_icon fa"></i>');
      }

      switch (this.options.type) {
        case 'alert':
        case 'notification':
          this['$bar'].find('i').addClass('fa-bell');
          break;
        case 'warning':
          this['$bar'].find('i').addClass('fa-exclamation');
          break;
        case 'error':
          this['$bar'].find('i').addClass('fa-times');
          break;
        case 'information':
          this['$bar'].find('i').addClass('fa-info');
          break;
        case 'success':
          this['$bar'].find('i').addClass('fa-check');
          break;
        case 'busy':
          //this['$message'].find('span').before('<div class="loader-container">' +
          //  '<div class="loader loader-xs"></div></div>');

          this['$message'].find('span').before('<div class="mini-spinner mini-spinner-dark mini-spinner-sm">' +
            '<div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
          break;
        default:
          this['$bar'].find('i').addClass('fa-bell');
          break;
      }
    },
    callback: {
      onShow: function () {
        ;
      },
      onClose: function () {
        ;
      }
    }
  };

  $.noty.defaults = {
    layout: 'bottomRight',
    theme: 'wtNoty', // or 'relax'  defaultTheme
    type: 'alert',
    text: '', // can be html or string
    dismissQueue: true, // If you want to use queue feature set this true
    template: '<div class="noty_message"><span class="noty_text"></span></div>',
    animation: {
      open: { height: 'toggle' }, // or Animate.css class names like: 'animated bounceInLeft'
      close: { height: 'toggle' }, // or Animate.css class names like: 'animated bounceOutLeft'
      easing: 'swing',
      speed: 500 // opening & closing animation speed
      //open: 'animated bounceInRight', // Animate.css class names
      //close: 'animated bounceOutRight', // Animate.css class names
      //easing: 'swing', // unavailable - no need
      //speed: 500 // unavailable - no need
    },
    timeout: false, //5000, // delay for closing event. Set false for sticky notifications
    force: false, // adds notification to the beginning of queue when set to true
    modal: false,
    maxVisible: 5, // you can set max visible notification for dismissQueue true option,
    killer: false, // for close all notifications before show
    closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop']
    callback: {
      onShow: function () {
        ;
      },
      afterShow: function () {
        ;
      },
      onClose: function () {
        ;
      },
      afterClose: function () {
        ;
      }
    },
    buttons: false // an array of buttons
  };


}
