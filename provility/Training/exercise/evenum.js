let result = [];

const printEvenNumbers = (size) => {
  for (let i = 0; i < size; i++) {
    result.push(i * 2);
  }
  return result.join();
};

const size = 15;

console.log(printEvenNumbers(size));

/* for(i=0; i<=30; i++){ */
/*     // let's divide the value by 2 */
/*     // if the reminder is zero then it's an Even number */
/* } */
/*     if(i % 2 == 0){ */
/*       evenNums += i + "<br>"; */
/*     } */
/*      */

/* const printEvenNumbers = (size) => { */
/*     const a = [] */
/*     for (let i = 0; i < size; i++) { */
/*       a.push(i * 2); */
/*     } */
/*     return a.join(); */
/*   } */
/*   const size = 15 */
/*   console.log(printEvenNumbers(size)) */

// const printEvenNumbers = (size) => {
// return Array.from({ length: size }, (x, i) => i === 0 ? 0 : (i + 1) % 2 === 0 ? i + 1 : null).filter(x => x);
//
// }
// const size = 15
// console.log(printEvenNumbers(size))//0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
