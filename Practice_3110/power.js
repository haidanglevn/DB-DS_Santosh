//Write  a  function  called  power  which  accepts  a  base  and  an  exponent.
//The  function should return the power of the base to the exponent.
//This function should mimic the functionality of
//Math.pow() – do not worry about negative bases and exponents.

function power(base, exponent) {
  if (exponent == 0) {
    return;
  }
  result = base * power(base, exponent - 1);
  return result;
}
power(2, 10);
console.log(power(2, 2));
