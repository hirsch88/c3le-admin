/// <reference path="../../../../typings/tsd.d.ts" />

module c3.auth.services.test {
  'use strict';

  describe(`Unit: ${Namespace}.AuthenticationService`, () => {

    beforeEach(module(Namespace));
    
    var service: IAuthenticationService;
    beforeEach(angular.mock.inject([ID.AuthenticationService, s => service = s]));

    it('should contain a AuthenticationService service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
