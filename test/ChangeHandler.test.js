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
    ch.insertCoin("quarter");
    expect(ch.cashTendered).toEqual(25); 
  });  

  test("2b. Inserting a dime adds 10", () => {
    const ch = new ChangeHandler(10);
    ch.insertCoin("dime");
    expect(ch.cashTendered).toEqual(10); 
  });  

  test("2c. Inserting a nickel adds 5", () => {
    const ch = new ChangeHandler(10);
    ch.insertCoin("nickel");
    expect(ch.cashTendered).toEqual(5); 
  }); 

  test("2d. Inserting a penny adds 1", () => {
    const ch = new ChangeHandler(10);
    ch.insertCoin("penny");
    expect(ch.cashTendered).toEqual(1); 
  }); 

  test("2e. Calling function multiple times continues to add to amount", () => {
    const ch = new ChangeHandler(10);
    const penny = 1;
    const nickel = 5;
    const dime = 10;
    const quarter = 25;
    ch.insertCoin("penny");
    ch.insertCoin("nickel");
    ch.insertCoin("dime");
    ch.insertCoin("quarter");
    expect(ch.cashTendered).toEqual(41); 

  }); 

  test("3a. Returns true if cashTendered more than amountDue", () => {
    const ch = new ChangeHandler(100);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.isPaymentSufficient()
    expect(result).toEqual(true);
  });

  ("3a. Returns false if cashTendered is less than amountDue", () => {
    const ch = new ChangeHandler(100);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.isPaymentSufficient()
    expect(result).toEqual(false);
  });

  test("3c. Returns true if cashTendered is equal than amountDue", () => {
    const ch = new ChangeHandler(15);
    ch.insertCoin("nickel");
    ch.insertCoin("nickel");
    ch.insertCoin("nickel");
    const result = ch.isPaymentSufficient()
    expect(result).toEqual(true);
  });

  test("4a. 32 change = 1-Q, 0-D, 1-N, 2-P", () => {
    const ch = new ChangeHandler(68);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.giveChange();
    expect(result).toEqual({
      quarters: 1, dimes: 0, nickels: 1, pennies: 2
    });
  });

  test("4b. 10 change = 0-Q, 1-D, 0-N, 0-P", () => {
    const ch = new ChangeHandler(90);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.giveChange();
    expect(result).toEqual({
      quarters: 0, dimes: 1, nickels: 0, pennies: 0
    });
  });

  test("4c. 27 change = 1-Q, 0-D, 0-N, 2-P", () => {
    const ch = new ChangeHandler(73);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.giveChange();
    expect(result).toEqual({
      quarters: 1, dimes: 0, nickels: 0, pennies: 2
    });
  });

  test("4d. 68 change = 2-Q, 1-D, 1-N, 3-P", () => {
    const ch = new ChangeHandler(32);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.giveChange();
    expect(result).toEqual({
      quarters: 2, dimes: 1, nickels: 1, pennies: 3
    });
  });

  test("extra test- 4 change / 4 pennies", () => {
    const ch = new ChangeHandler(96);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.giveChange();
    expect(result).toEqual({
      quarters: 0, dimes: 0, nickels: 0, pennies: 4
    });
  });

  // test.only("extra test- 5 change 1 nickel", () => {
  //   const ch = new ChangeHandler(95);
  //   ch.insertCoin(25);
  //   ch.insertCoin(25);
  //   ch.insertCoin(25);
  //   ch.insertCoin(25);
  //   const result = ch.giveChange();
  //   expect(result).toEqual({
  //     quarters: 0, dimes: 0, nickels: 1, pennies: 0
  //   });
  // });

  test("extra test- 2 change 1 quarter", () => {
    const ch = new ChangeHandler(75);
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    ch.insertCoin("quarter");
    const result = ch.giveChange();
    expect(result).toEqual({
      quarters: 1, dimes: 0, nickels: 0, pennies: 0
    });
  });


});
