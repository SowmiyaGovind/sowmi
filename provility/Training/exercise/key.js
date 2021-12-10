// const keys = (data) => {
//   const newArr = [];
//   for (var key in data) {
//     newArr.push(key);
//   }
//   return newArr;
// };
// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(keys(data)); // ['a', 'b', 'c']



// const word=['apple'];

// for(let letter in word ){
//   if(word[0]=='p'){
//     const count=1;
//     return 
//   }
// }
// console.log(count);




let fruit="apple";
let check="p";
let count=0;
for(let i=0;i<fruit.length;i++){
    if(fruit[i]==check){
    count++
}
}
console.log(`Count of p is ${count}`);
