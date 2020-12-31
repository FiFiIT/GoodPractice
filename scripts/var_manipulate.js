const { Module } = require("module");

const SHIPPING_COST = 5;
const DISCOUNT = 0;
const TAX_RATE = 1.1;

function calculateTotal(
  items,
  { shipping = SHIPPING_COST, discount = DISCOUNT } = {}
) {
  if (items == undefined || items.length == 0) return 0;

  const totalNetValue = items.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

  return totalNetValue * (1 - discount) * TAX_RATE + SHIPPING_COST;
}

module.exports = {
  calculateTotal: calculateTotal,
  TAX_RATE: TAX_RATE,
  SHIPPING_COST: SHIPPING_COST,
};
