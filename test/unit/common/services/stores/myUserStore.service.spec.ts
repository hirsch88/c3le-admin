/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.stores.test {
  'use strict';

  describe(`Unit: ${Namespace}.MyUserStoreService`, () => {

    beforeEach(module(Namespace));
    
    var service: IMyUserStoreService;
    beforeEach(angular.mock.inject([ID.MyUserStoreService, s => service = s]));

    it('should contain a MyUserStoreService service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
