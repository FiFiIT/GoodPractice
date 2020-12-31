var assert = require("assert");
var variable = require("../scripts/var_manipulate");

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
];

const totalCosts = 70 * variable.TAX_RATE;

describe("Variable Manipulation", () => {
  describe("Handling undefined parameter", () => {
    it("item and options are undefined", () => {
      var actual = variable.calculateTotal(undefined, undefined);
      assert.strictEqual(actual, 0);
    });
    it("only options are undefined", () => {
      var actual = variable.calculateTotal(testItems, undefined);
      assert.strictEqual(actual, totalCosts + variable.SHIPPING_COST);
    });
    it("items are empty", () => {
      var actual = variable.calculateTotal([], undefined);
      assert.strictEqual(actual, 0);
    });
  });
});
