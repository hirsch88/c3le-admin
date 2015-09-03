/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.views.test {
  'use strict';

  describe(`Unit: ${Namespace}.MainController`, () => {

    beforeEach(module(Namespace));

    var controller: IMainController;
    beforeEach(inject($controller => controller = $controller(ID.MainController)));

    it('should contain a Main controller', () => should.exist(controller));
  });
}
