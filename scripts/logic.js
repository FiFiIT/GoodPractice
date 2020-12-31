const numberToAccountingString = (number) => {
  if (number == null) return;
  if (number < 0) return `(${Math.abs(number)})`;
  return number.toString();
};

exports.numberToAccountingString = numberToAccountingString;
