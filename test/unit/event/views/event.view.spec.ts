/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.views.test {
  'use strict';

  describe(`Unit: ${Namespace}.EventController`, () => {

    beforeEach(module(Namespace));

    var controller: IEventController;
    beforeEach(inject($controller => controller = $controller(ID.EventController)));

    it('should contain a Event controller', () => should.exist(controller));
  });
}
