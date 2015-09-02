/// <reference path="../../../../typings/tsd.d.ts" />

module c3.event.services.test {
  'use strict';

  describe(`Unit: ${Namespace}.EventsServiceService`, () => {

    beforeEach(module(Namespace));
    
    var service: IEventsServiceService;
    beforeEach(angular.mock.inject([ID.EventsServiceService, s => service = s]));

    it('should contain a EventsServiceService service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
