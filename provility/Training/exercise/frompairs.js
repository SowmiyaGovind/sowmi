//17.
/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
// const fromPairs = (array) => {
// let result = {};
// for (let i = 0; i< array.length; i++) {
// let element=array[i] //[a,1]
// for (let j = 0; j <element.length; j+=2) {
// let nextindex=j+1;
// let key=element[j] //a
// let value=element[nextindex] //1
// result[key]=value
// }
//
// }
// return result;
// }
// const data = [
// ["a", 1],
// ["b", 2],
// ];
// console.log(fromPairs(data)); // { a: 1, b: 2 }






//only 2 element in the array means this one 
function formPairs(arr) {
  let objPairValues = {};
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    objPairValues[ele[0]] = ele[1];
  }
  return objPairValues;
}

const data = [
  ["a", 1],
  ["b", 2],
];

console.log(formPairs(data)); // { a: 1, b: 2 }
//
//
