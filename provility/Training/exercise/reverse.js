const reverse = (array) => {
  value = [];

  for (i = array.length - 1; i >= 0; i--) {
    value.push(data[i]);
  }

  return value;
};
const data = [1, 2, 3];
console.log(reverse(data)); //3,2,1
