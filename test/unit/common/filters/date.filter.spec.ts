/// <reference path="../../../../typings/tsd.d.ts" />

module c3.common.filters.test {
  'use strict';

  describe(`Unit: ${Namespace}.DateFilterFilter`, () => {

    beforeEach(module(Namespace));

    var date: IDateFilterFilter;
    beforeEach(inject($filter => date = $filter(ID.DateFilterFilter)));

    it('should contain a date filter', () => should.exist(date));
  });
}
