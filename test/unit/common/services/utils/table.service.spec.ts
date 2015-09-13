/// <reference path="../../../../../typings/tsd.d.ts" />

module c3.common.services.utils.test {
  'use strict';

  describe(`Unit: ${Namespace}.TableService`, () => {

    beforeEach(module(Namespace));
    
    var service: ITableService;
    beforeEach(angular.mock.inject([ID.TableService, s => service = s]));

    it('should contain a TableService service', () => should.exist(service));
    
    it('should have a method', () => should.exist(service.method));
  });
}
