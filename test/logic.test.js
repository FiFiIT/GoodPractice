var assert = require("assert");
var logic = require("../scripts/logic");

describe("Logic of numberToAccountingString", function () {
  describe("should always return string", function () {
    it("for -4", function () {
      var test_1 = logic.numberToAccountingString(-4);

      assert.strictEqual(typeof test_1, "string");
    });
    it("for 0", function () {
      var test_2 = logic.numberToAccountingString(0);

      assert.strictEqual(typeof test_2, "string");
    });
    it("for 4", function () {
      var test_2 = logic.numberToAccountingString(0);

      assert.strictEqual(typeof test_2, "string");
    });
  });
  describe("should return only negative number betweeen parentheses", function () {
    it("for -7", function () {
      var test = logic.numberToAccountingString(-7);
      assert.strictEqual(test, "(7)");
    });
    it("for 0", function () {
      var test = logic.numberToAccountingString(0);
      assert.strictEqual(test, "0");
    });
    it("for 7", function () {
      var test = logic.numberToAccountingString(7);
      assert.strictEqual(test, "7");
    });
  });
  describe("should return undefined when undefined is passed", function () {
    it("undefined", function () {
      var test = logic.numberToAccountingString(undefined);
      assert.strictEqual(test, undefined);
    });
  });
});
