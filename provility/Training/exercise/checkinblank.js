//21.
/**
 * Task description: Write a method to check whether a string is blank or not
 * Expected Result: ('') => true
 * Task Complexity: 1 of 5
 */
const checkIsBlank = (str) => {
  if (!str.length) {
    return true;
  }
  return false;
};
const str = "";
console.log(checkIsBlank(str)); // true
