/// <reference path="../../../../typings/tsd.d.ts" />

module c3.core.router {
  'use strict';

  // CLASS ////////////////////////////////////////////////////////////////////////
  export class AppRouter {

    private stack: Array<any> = [];
    private previousState: any;
    private oldPreviousState: any;

    constructor(private $state: ng.ui.IStateService,
                private $urlRouter: ng.ui.IUrlRouterService,
                private $rootScope: ng.IRootScopeService) {
    }

    use(middleware: Function) {
      var layer;
      console.log(arguments);
      if (typeof middleware !== 'function') {
        layer = new AppRouterLayer(arguments[1], arguments[0]);
      } else {
        layer = new AppRouterLayer(middleware);
      }
      if (layer) {
        this.stack.push(layer);
      }
    }

    _addStateChangeListener(event, toState, toParams, fromState, fromParams) {
      if (this.stack.length > 0 && !this.sameState(toState)) {
        event.preventDefault();
        this.oldPreviousState = this.previousState;
        this.previousState = toState;
        this.dispatch(
          new AppRouterStart(fromState, fromParams),
          new AppRouterDestination(toState, toParams, this.$state),
          (err) => {
            this.$rootScope['appRouterIsWorking'] = false;
            if (!err) {
              this.$state.go(toState.name, toParams || {});
            }
          },
          () => {
            this.previousState = this.oldPreviousState;
          });
      }
    }

    private sameState(toState) {
      if (this.previousState && this.previousState.name) {
        return this.previousState.name === toState.name;
      } else {
        return false;
      }
    }

    private dispatch(start, destination, done, abort) {
      var idx = 0;
      var stack = this.stack;
      if (stack.length === 0) {
        return done();
      }

      this.$rootScope['appRouterIsWorking'] = true;
      next();
      ////////////////////////////////////

      function next(err?) {
        if (err) {
          return done(err);
        }
        var layer = stack[idx++];
        if (!layer) {
          return done();
        }
        try {
          if (!layer.hasRoute() || (layer.hasRoute() && layer.matchesState(destination.state.name))) {
            layer.handle(
              start,
              destination,
              next,
              done,
              abort
            );
          } else {
            return next();
          }
        } catch (err) {
          next(err);
        }
      }
    }

  }

  // FACTORY //////////////////////////////////////////////////////////////////////
  factory.$inject = [
    '$state', '$urlRouter', '$rootScope'
  ];

  function factory($state, $urlRouter, $rootScope) {
    return new AppRouter($state, $urlRouter, $rootScope);
  }


  // RUN ///////////////////////////////////////////////////////////////////////////
  function run($rootScope, $urlRouter, appRouter) {
    $rootScope.appRouterIsWorking = false;
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      appRouter._addStateChangeListener(event, toState, toParams, fromState, fromParams);
    });
    $urlRouter.listen();
  }

  run.$inject = ['$rootScope', '$urlRouter', ID.Router];


  // ANGULAR ///////////////////////////////////////////////////////////////////////
  angular
    .module(ID.Router, [])
    .factory(ID.Router, factory)
    .run(run);

}
