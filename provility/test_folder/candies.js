const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const candies1 = [4, 2, 1, 1, 2];
const extraCandies1 = 1;
const candies2 = [12, 1, 12];
const extraCandies2 = 10;
function countCandies(candies, extraCandies) {
//   let value = [];
  let finalResult = [];
 const maxCandies=candies[0]+extraCandies
  for (let i = 1; i < candies.length; i++) {
      if(candies[i]>maxCandies){
          maxCandies=candies[i]
      }
    // value.push(result);
    // min = Math.min(...value);
 
  for (let i = 0; i < candies.length; i++) {
        let result = candies[i] + extraCandies;
  
    if (result>maxCandies) {
      finalResult.push("true");
    } else {
      finalResult.push("false");
    }
  }
  return finalResult;
  }
  
}
console.log(countCandies(candies, extraCandies));
console.log(countCandies(candies1, extraCandies1));
console.log(countCandies(candies2, extraCandies2));
