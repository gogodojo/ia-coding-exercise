
// unit-tests for LogoController

import { LogoController } from '../js/app/LogoController.js';

describe("LogoController", function() {

  let logoController;

  beforeEach(function() {
    logoController = new LogoController();
  });

  it("should be a constructible class", function() {
    expect(logoController).toBeDefined();
  });
});
