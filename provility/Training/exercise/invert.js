const invert = (data) => {
  var newObj = {};
  for (var key in data) {
    newObj[data[key]] = key;
  }
  return newObj;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(invert(data));
