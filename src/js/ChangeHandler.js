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

      if (type === "quarter") {
        this.cashTendered += quarter;
      } else if (type === "dime") {
        this.cashTendered += dime;
      } else if (type === "nickel") {
        this.cashTendered += nickel;
      } else if (type === "penny") {
        this.cashTendered += penny;
      }
    }
    
    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
        return true;
      } else if (this.cashTendered < this.amountDue) {
        return false;
      }
    }

    giveChange() {
      let change = this.cashTendered - this.amountDue;
      let quarterCount = 0;
      let nickelCount = 0;
      let dimeCount = 0;
      let pennyCount = 0;
      const coinValues = [25, 10, 5, 1];

      if (Math.floor(change / coinValues[0]) >= 1) {
        quarterCount += Math.floor(change / coinValues[0]);
        // get remainder change
        change -= (coinValues[0] * quarterCount)
        dimeCount += Math.floor(change / coinValues[1]);
        // update remainder
        change -= (coinValues[1] * dimeCount)
        // get nickel count in remaining change
        nickelCount += Math.floor(change / coinValues[2]);
        // update remainder
        change -= (coinValues[2] * nickelCount)
        // get penny count in remainging change
        pennyCount += Math.floor(change / coinValues[3]);
        // remainder should be zero
        change -= (coinValues[3] * pennyCount)

      } else if (Math.floor(change / coinValues[1]) >= 1) {
        dimeCount += Math.floor(change / coinValues[1]);
        console.log("HEY" + dimeCount);
        // update remainder
        change -= (coinValues[1] * dimeCount)
        console.log(change);
        // get nickel count in remaining change
        nickelCount += Math.floor(change / coinValues[2]);
        console.log(nickelCount);
        // update remainder
        change -= (coinValues[2] * nickelCount)
        console.log(change);
        // get penny count in remainging change
        pennyCount += Math.floor(change / coinValues[3]);
        console.log(pennyCount);
        // remainder should be zero
        change -= (coinValues[3] * pennyCount)
        console.log(change);

      } else if (Math.floor(change / coinValues[1]) >= 1) {
        console.log(change)
        // get nickel count in remaining change
        nickelCount += Math.floor(change / coinValues[2]);
        console.log("hello" + nickelCount);
        // update remainder
        change -= (coinValues[2] * nickelCount)
        console.log(change);
        // get penny count in remainging change
        pennyCount += Math.floor(change / coinValues[3]);
        console.log(pennyCount);
        // remainder should be zero
        change -= (coinValues[3] * pennyCount)
        console.log(change);
        
      } else if (Math.floor(change / coinValues[3]) >= 1){
        pennyCount += Math.floor(change / coinValues[3]);
        console.log(pennyCount);
        // remainder should be zero
        change -= (coinValues[3] * pennyCount)
        console.log(change);
      }
        return {
          quarters: quarterCount,
          dimes: dimeCount,
          nickels: nickelCount,
          pennies: pennyCount
        }
    }

}

module.exports = ChangeHandler;