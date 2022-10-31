//Write a func,on called recursiveRange which accepts a number
//and adds up all the numbers from 0 to the number passed to the func,on

function recursiveRange(x) {
  if (x == 0) {
    return 0;
  }
  result = x + recursiveRange(x - 1);
  return result;
}

recursiveRange(6); // 21
console.log(result);
recursiveRange(10); // 55
console.log(result);
