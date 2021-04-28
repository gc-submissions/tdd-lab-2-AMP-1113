const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // Constructor Tests
  test("1a. amountDue is set based on an argument", () => {
      const ch = new ChangeHandler(12);
      expect(ch.amountDue).toEqual(12);
  });

  test("1b. cashTendered is set to 0", () => {
    const ch = new ChangeHandler();
    expect(ch.cashTendered).toEqual(0);
});

});