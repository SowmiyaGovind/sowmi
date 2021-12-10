const sum = [5, 6, 7, 1, 2, 3];
const sumValue = sum.reduce(function (previousValue, currentValue) {
  return value = previousValue + currentValue;
}, 0); // accumulator -> starting value
console.log(value);

// const sumValue1 = sum.reduce(function(currentValue, nextValue){
// const value = currentValue + nextValue;
// return value
// })
//
// const startingValue = 0;
// sum.forEach((currentValue)=>{
// startingValue += currentValue;
// });
// console.log()
// console.log(sumValue);
