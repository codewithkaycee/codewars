// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//MY SOLUTION
function evenOrOdd(number) {
    if (number % 2 === 0 ){
      return( "Even")
    }else {
      return "Odd"
    }
    console.log(evenOrOdd(4));
    console.log(evenOrOdd(7));
  }