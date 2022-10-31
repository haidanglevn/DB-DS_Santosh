//Write  a  func,on factorial  which  accepts  a  number  and  returns  the  factorial  of that number.
// A factorial is the product of an integer and all the integers below it

function factorial(x) {
  if (x == 0) {
    return 1;
  }
  result = x * factorial(x - 1);
  return result;
}

factorial(1); // 1
console.log(result);
factorial(2); // 2
console.log(result);
factorial(4); // 24
console.log(result);
