/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      const quarter = 25;
      const dime = 10;
      const nickel = 5;
      const penny = 1;

      if (type === quarter) {
        this.cashTendered += quarter;
      } else if (type === dime) {
        this.cashTendered += dime;
      } else if (type === nickel) {
        this.cashTendered += nickel;
      } else {
        this.cashTendered += penny;
      }
    }
    
    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
 
    }

    giveChange() {
        // TODO return the correct change in the following format...
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}

module.exports = ChangeHandler;