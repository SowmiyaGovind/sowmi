const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const candies1 = [4, 2, 1, 1, 2];
const extraCandies1 = 1;
const candies2 = [12, 1, 12];
const extraCandies2 = 10;
function countCandies(candies, extraCandies) {
  let finalResult = [];
  for (let i = 0; i < candies.length; i++) {
    const value=candies
    max = Math.max(...value);
    // value[i] = value[i] + extraCandies;
    // // finalResult.push(value[i])
    const result = max <= value[i];
    finalResult.push(result);
    // console.log(max)
  }
  return finalResult;
}
console.log(countCandies(candies, extraCandies)); //[ true, true, true, false, true ]

console.log(countCandies(candies1, extraCandies1)); //[ true, false, false, false, false ]
console.log(countCandies(candies2, extraCandies2)); //[ true, false, true ]
