//13.
/**
 * Task description: Omit the properties from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
 * Task Complexity: 1 of 5
//  * @param {object} data - The source object
//  * @param {Array} paths - The property paths to omit.
//  * @returns {Object}
 */

const omit = (data, paths) => {
  let result = {};
  for (let key in data) {
    let value = data[key];
    data[key] = key;
    if (!paths.includes(data[key])) {
      result[data[key]] = value;
    }
  }
  return result;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
}
const paths = ["a", "c"];
console.log(omit(data, paths)); //{b:2}
