//19.
/**
 * Task description: Write a method to convert a string into camel case.
 * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
 * Task Complexity: 1 of 5
 */


// const camelize = (str) => {
  // let result = "";
  // const words = str.split(" ");
// 
  // for (let word of words) {
    // const finalWord = word[0].toUpperCase() + word.substring(1);
    // result = `${result}${finalWord}`;
  // }
  // return result;
// };
// const str = "JavaScript exercises";
// console.log(camelize(str)); // "JavaScriptExercises"
// 
// 

// const camelize = (str) => {
// let camelize = "";
// const words = str.split(" ");
// for (let word of words) {
//   const letter = word[0].toUpperCase() + word.substring(1);
//   camelize = `${camelize}${letter}`;
// }
// return camelize;
//   };
//   const str = "JavaScript exercises";
//   console.log(camelize(str)); // "JavaScriptExercises"




const camelize = (str) => {
  let res="";
  for (let i = 0; i < str.length; i++)
  {
      if (str[i] == " ")
      {
          res= res + str[i+1].toUpperCase();
      }
      else{
          res= res + str[i];
          }}
  return res;
}
const str = "JavaScript exercises"
console.log(camelize(str)) // "JavaScriptExercises"
New
