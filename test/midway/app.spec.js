describe('Midway: Testing Modules', function () {

  describe('app.js:', function () {

    var module;
    before(function () {
      module = angular.module('c3');
    });

    it('should be registered', function () {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies:", function () {

      var deps;
      var hasModule = function (m) {
        return deps.indexOf(m) >= 0;
      };
      before(function () {
        deps = module.value('c3').requires;
      });

      //you can also test the module's dependencies
      it("should have c3.core as a dependency", function () {
        expect(hasModule('c3.core')).to.equal(true);
      });

      it("should have c3.layout as a dependency", function () {
        expect(hasModule('c3.layout')).to.equal(true);
      });

      it("should have c3.home as a dependency", function () {
        expect(hasModule('c3.home')).to.equal(true);
      });

    });
  });
});
