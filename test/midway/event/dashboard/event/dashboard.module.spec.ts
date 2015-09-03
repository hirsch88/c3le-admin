/// <reference path="../../../typings/tsd.d.ts" />

module c3.event/dashboard.test {
  'use strict';

  describe(`Midway: ${Namespace}.`, () => {
    var app: ng.IModule;
    var appDeps: string[];
    var module: ng.IModule;
    var appHasModule = m => appDeps.indexOf(m) >= 0;

    before(() => {
      app = angular.module('c3');
      appDeps = app.value('c3').requires;
      module = angular.module(Namespace);
    });

    it('should be registered', () => should.exist(module));

    it('should be registered in the app module', () => expect(appHasModule(Namespace)).to.equal(true));

    describe('Dependencies: ', () => {
      var deps: string[];
      var hasModule = m => deps.indexOf(m) >= 0;
      before(() => deps = module.value(Namespace).requires);

      // it('should have c3.event/dashboard.Nobody as a dependency', () => expect(hasModule('c3.event/dashboard.Nobody')).to.equal(true));
    });
  });
}
