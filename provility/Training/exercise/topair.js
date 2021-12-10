//18.
/**
 * Task description: Write a method that returns an array composed of nested array
 * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
 * Task Complexity: 2 of 5
 * @param {Object} obj - The object to query.
 * @returns {Array}
 */

const toPairs = (obj) => {
  const arr = [];
  for (let key in data) {
    arr.push([key,obj[key]]);
  }
  return arr;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(toPairs(data)); // [['a', 1], ['b', 2], ['c', 3]]
