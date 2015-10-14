/// <reference path="../../../../typings/tsd.d.ts"/>

module c3.auth.views {
  'use strict';

  // CONTROLLER ////////////////////////////////////////////////////////////////////
  class SignInController extends core.util.ViewController {
    form: any;
    promise: Promise<any>;

    email: string;
    password: string;

    // CONSTRUCTOR /////////////////////////////////////////////
    static $inject = [
      '$scope',
      core.util.ID.EventHandler,
      services.ID.AuthenticationService,
      '$state'
    ];

    constructor($scope,
                eventHandler,
                private authenticationService: services.AuthenticationService,
                private $state: ng.ui.IStateService) {
      super($scope, eventHandler);
      this.init();
    }

    private init() {
      this.reset();
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


  }

  angular
    .module(ID.SignIn, [
      services.ID.AuthenticationService
    ])
    .controller(ID.SignInController, SignInController);
}
