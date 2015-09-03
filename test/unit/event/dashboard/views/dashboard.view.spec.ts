/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.event.dashboard.views.test {
  'use strict';

  describe(`Unit: ${Namespace}.DashboardController`, () => {

    beforeEach(module(Namespace));

    var controller: IDashboardController;
    beforeEach(inject($controller => controller = $controller(ID.DashboardController)));

    it('should contain a Dashboard controller', () => should.exist(controller));
  });
}
