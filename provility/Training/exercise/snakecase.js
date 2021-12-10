//23.
/**
 * Task description: Write a method to convert a string into snakeCase case.
 * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
 * Task Complexity: 1 of 5
 */
const snakeCase = (str) => {
  let result = "";
  const words = str.split(" ");
  for (let word of words) {
    const final = word.toLowerCase();
    result = `${result}${final}-`;
    var new_str = result.slice(0,-1);
  }
  return new_str;
};
const str = "Robin Singh from USA.";
console.log(snakeCase(str)); // "robin-singh-from-usa"
