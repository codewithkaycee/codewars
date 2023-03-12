/*Bob has written a function to detect the type of an object. It receives any primitive values or objects, and returns 
its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?*/

//BUG
function objectType(obj = null) { //if no arguments are passed, defaults to null
    return Object.prototype.toString.call(obj);
  }

  //SOLUTION
  function objectType(obj) {
    if(arguments.length === 0) {
      return "[object Null]";
    } else if(obj === undefined) {
      return "[object Undefined]";
    } else if (obj === null) {
      return "[object Null]";
    }
    return Object.prototype.toString.call(obj);
  }