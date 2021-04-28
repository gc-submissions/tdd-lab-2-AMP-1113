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

  test("2a. Inserting a quarter adds 25", () => {
    const ch = new ChangeHandler(10);
    const quarter = 25;
    ch.insertCoin(quarter);
    expect(ch.cashTendered).toEqual(25); 
  });  

  test("2b. Inserting a dime adds 10", () => {
    const ch = new ChangeHandler(10);
    const dime = 10;
    ch.insertCoin(dime);
    expect(ch.cashTendered).toEqual(10); 
  });  

  test("2c. Inserting a nickel adds 5", () => {
    const ch = new ChangeHandler(10);
    const nickel = 5;
    ch.insertCoin(nickel);
    expect(ch.cashTendered).toEqual(5); 
  }); 

  test("2d. Inserting a penny adds 1", () => {
    const ch = new ChangeHandler(10);
    const penny = 1;
    ch.insertCoin(penny);
    expect(ch.cashTendered).toEqual(1); 
  }); 
});