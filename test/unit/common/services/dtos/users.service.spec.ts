/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.dtos.test {
  'use strict';

  describe(`Unit: ${Namespace}.UsersService`, () => {

    beforeEach(module(Namespace));
    
    var service: IUsersService;
    beforeEach(angular.mock.inject([ID.UsersService, s => service = s]));

    it('should contain a UsersService service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
