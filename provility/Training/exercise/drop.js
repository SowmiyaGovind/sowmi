const drop = (array, elementToDrop) => {
  const result = [];

  for (i = elementToDrop; i < data.length; i++) {
    result.push(data[i]);
  }
  return result;
};
const data = [1, 2, 3, 4];
const elementToDrop = 2;
console.log(drop(data, elementToDrop)); //[3,4]













