//map
const value = [1, 2, 3];
const value1 = [10, 20, 30];
const square = value.map((v) => {
  return v * v;
});
console.log(square);
const value = [1, 2, 3];
const value1 = [10, 20, 30];
const add = value.map(function (n, index) {
  return n + value1[index];
});
console.log(add);
 
