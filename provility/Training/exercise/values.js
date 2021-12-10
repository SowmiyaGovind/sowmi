const values = (data) => {
  let newArr = [];
  for (let key in data) {
    newArr.push(data[key]);
  }
  return newArr;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(values(data));
