/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.controllers {
  'use strict';

  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class AuthSignInController extends core.util.ViewController {
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      services.ID.AuthenticationService,
      '$state'
    ];

    form: any;
    promise: Promise<any>;

    email: string;
    password: string;


    // CONSTRUCTOR /////////////////////////////////////////////
    constructor($scope,
                eventHandler,
                private authenticationService: services.AuthenticationService,
                private $state: ng.ui.IStateService) {
      super($scope, eventHandler);
      this.init();
    }


    // PUBLIC API /////////////////////////////////////////////
    submit() {
      this.promise = this.authenticationService
        .signin(this.email, this.password);

      this.promise
        .then(() => {
          this.$state.go('admin.event.dashboard');
        })
        .catch((e) => {
          console.log(e);
          this.reset();
        });

    }

    reset() {
      this.email = '';
      this.password = '';
    }


    // PRIVATE API /////////////////////////////////////////////
    private init() {
      this.reset();
    }


  }

  angular
    .module(ID.AuthSignInController, [
      services.ID.AuthenticationService
    ])
    .controller(ID.AuthSignInController, AuthSignInController);
}
