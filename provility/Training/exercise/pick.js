const pick = (data, paths) => {
  let result = {};
  for (let key in data) {
    if (paths.includes(key)) {
      result[key] = data[key];
    }
  }
  return result;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
const paths = ["a", "c"];
console.log(pick(data, paths)); //{a:1,c:3}
