// unit-tests for main

describe("main", function() {

  beforeEach(function() {
  });

  afterEach(function() {
  });

  it("should contain one visible main div", function() {
    let elements = document.getElementsByClassName('main-div');
    expect(elements.length).toEqual(1);
  });

});
