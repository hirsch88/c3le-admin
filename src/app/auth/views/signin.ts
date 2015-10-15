/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.views {
  'use strict';

  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class SignInController extends core.util.ViewController {
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
        .catch(() => {
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
    .module(ID.SignIn, [
      services.ID.AuthenticationService
    ])
    .controller(ID.SignInController, SignInController);
}
