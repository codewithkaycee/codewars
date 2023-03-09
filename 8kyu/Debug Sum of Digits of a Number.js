// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

//DEBUG
function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 1; ix < digits.length; ix = sum + 1) {
      sum =+ digits[ix + 1]);
    }
    return sum;
  }
// SOLUTION
function getSumOfDigits(integer) {
    var sum = 0;
    var digits = Math.abs(Math.floor(integer)).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += parseInt(digits[ix]);
    }
    return sum;
  }
  