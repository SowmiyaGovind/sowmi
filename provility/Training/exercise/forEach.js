//foreach
const alpha=['a','b']
let text= '';
const result=alpha.forEach(function (ele,index, array){ // function define
    text += index +" : " + ele ; 
    return text;
});
console.log(text)
/*  */
/*  */

// /* foreach1 */
/* const alpha=['a','b'] */
/* let text1=''; */
/*  const result=alpha.forEach(alphaLoopFun); // function referring     //foreach cl  alphaloopfun 
/* function alphaLoopFun (ele,index) { */
/*  text1 += index + ": " + ele ;  */
/*  return text1 */
/* } */
/* console.log(text1) */
/*  */