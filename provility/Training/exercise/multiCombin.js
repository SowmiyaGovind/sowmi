//15.
/**
 * Task description: Write a method that to combine elements from 3 arrays to
 * generate a string
 * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
 * Task Complexity: 2 of 5
 */
const characters = ["A", "B", "C"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const vowels = ["a", "e", "i", "o", "u"];
let result = "";
// let resultArr=[]
const multi_combine = (characters, numbers, vowels) => {
  const Maxlength = Math.max(characters.length, numbers.length, vowels.length);
  for (let i = 0; i < Maxlength; i++) {
    let c = characters[i] || "";
    let n = numbers[i] || "";
    let v = vowels[i] || "";
    result = result.concat(c, n, v);
    //  resultArr = resultArr.push(c,n,v)
  }
  return result;
};
console.log(multi_combine(characters, numbers, vowels));
