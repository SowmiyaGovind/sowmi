const sum = (numbers) => {
  result = 0;
  for (let a = 0; a < numbers.length; a++) {
    result = result + numbers[a];
  }
  return result;
};
const numbers = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
console.log(sum(numbers)); // 276




