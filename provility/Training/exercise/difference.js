//14.
/**
 * Task description: Creates an array of data values not included in the other given arrays
 * Expected Result: [2, 1], [2, 3] => [1]
 * Task Complexity: 2 of 5
 * @param {Array} array - The array to inspect.
 * @param {Array} valuesToExclude - The values to exclude.
 * @returns {Array}
 */
// const difference = ( data,valuesToExclude,a) => {
//   let result = []
//   const Maxlength=Math.max(data.length,valuesToExclude.length,a.length);
//   for (var i = 0; i < Maxlength; i++) {
// if (!data.includes(data[i]) || !valuesToExclude.includes(data[i])) {
//   result.push(data[i]);
// }
//   }
//  return result;

/* if(!result.includes(a[i])){ */
/*     result.push(arra[i]); */
///*   */
/* } */
/* return result */
// };
//
// const data = [2, 1,5];
// const valuesToExclude = [2, 3];
// const a=[1,4];
// console.log(difference(data, valuesToExclude,a)); // [5]

const difference = (array, valuesToExclude) => {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (!valuesToExclude.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};
const data = [1,2,3,8,9]
const valuesToExclude = [2,3,4]
// console.log(difference([1, 2], [2, 3])); // [1]
// console.log(difference([3, 2], [2, 1])); // [3]
// console.log(difference([2, 2], [2, 2])); // []
// console.log(difference([1, 2, 3, 5], [2, 3, 4])); // [1,5]
// console.log(difference([2, 3, 4], [1, 2, 3, 5])); // [4]
console.log(difference(data, valuesToExclude)); // [3]
