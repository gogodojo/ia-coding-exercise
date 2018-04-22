
// unit-tests for appConfig

import { appConfig } from '../js/app/appConfig.js';

describe("appConfig", function() {

  beforeEach(function() {
  });

  it("should be a plain module object", function() {
    expect(appConfig).toEqual(jasmine.any(Object));
  });
});
