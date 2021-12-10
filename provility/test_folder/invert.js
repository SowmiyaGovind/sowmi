const input = { a: 1, b: 2, c: 3 };

function invert(obj) {
  let result = {};
  for (let key in input) {
    result[obj[key]] = key;
  }
  return result;
}
console.log(invert(input));
