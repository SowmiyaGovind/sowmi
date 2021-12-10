// const value = [1, 2, 3];
// const value1 = [10, 20, 30];
// const add = value.map(function (n, index) {
//   return n + value1[index];
// });
// console.log(add);// with initial value to avoid when the array is empty
// 

 const sum = [1, 2, 3]  //6
// const output=sum.reduce(add,0); 
// function add(a,index) {
    // return a + index;
// }
// console.log(output); 


const sumValue = sum.reduce(function(previousValue, currentValue){
        const value = previousValue + currentValue;
        return value
},8) // accumulator -> starting value

const sumValue1 = sum.reduce(function(currentValue, nextValue){
    const value = currentValue + nextValue;
    return value
})
const startingValue = 0;

sum.forEach((currentValue)=>{
    startingValue += currentValue;
   
});
console.log(startingValue)







console.log(sumValue); 




