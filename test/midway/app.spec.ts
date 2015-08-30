/// <reference path="../../typings/tsd.d.ts"/>

module c3.test {
  'use strict';

  describe('Midway: Testing Modules', () => {

    describe('App Module:', () => {
      var module: ng.IModule;
      before(() => module = angular.module('c3'));

      it('should be registered', () => should.exist(module));

      describe('Dependencies:', () => {
        var deps: string[];
        var hasModule = m => deps.indexOf(m) >= 0;
        before(() => deps = module.value('appName').requires);

        // you can also test the module's dependencies
        it('should have c3.core as a dependency', () => expect(hasModule('c3.core')).to.equal(true));
        it('should have c3.home as a dependency', () => expect(hasModule('c3.home')).to.equal(true));
        it('should have c3.layout as a dependency', () => expect(hasModule('c3.layout')).to.equal(true));
      });
    });
  });
}
