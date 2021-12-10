////pop used to remove a element at the end of the array // and return the value of removed items
// const college=["ksr","srm","prc"];
// college.pop();
// console.log(college); // ['ksr','srm']
// let removed=college.pop()
// console.log(removed);


////shift method use to remove a element at the begging of the array
// const value=["1","2","3","4"];
// const v=value.shift()
// console.log(v) //1
// console.log(value) //['2','3','4']




// 
//push method add a element end of array
///return the length
// const name=["abi","indhu","hemu"];
// const b=name.push("charu");
// console.log(b) //4
// console.log(name) //['abi','indhu','hemu','charu']
// 
// 
//unshift methods add a element in begging of the array
// const names=["abi","indhu"];
// const c=names.unshift("hemani");
// console.log(c) //3 
// console.log(names) // ['hemani','abi','indhu']
// 

////splice remove how many  eleement in the variable and return the splice
///add and remove performed in splice
// var array=["one","two","three","four","five"];
// console.log(array.splice(2,1,"3"));   // 2 take a position,1 is remove the item at the position,add 3 in the position
// console.log(array)        //['threee'] 
//['one','two','3','four','five']

// 

////slice method returns selected elements in an array, as a new array.
///slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
///slice() does not change the original array. 
// var arr = [23,56,87,32,75,13];
// var new_arr = arr.slice(1,5);
// console.log(arr);
// console.log(new_arr);
// console.log(arr) 
///[23,56,87,32,75,13]
///[56,87,32,75]
 ///[23,56,87,32,75,13]

////joins returns array as a string
// /tha default separator is (,)
///join also does not change the  original array
//   const fruits=["apple","banana","orange"];
//   const fruitsadd=fruits.join(" and ")
//   console.log(fruitsadd)    //apple and banana and orange


///includes methodes use to check 
///its return true or false

// 
function details(){
const studentDetails={
    name:["sowmi","sharme","shakila","siva"]
  
}
console.log(studentDetails.includes("siva"))
// console.log((`"siva:"+${studentDetails}`))
  
}
// let str = "Hello world, welcome to the universe.";
// console.log(str.includes("world"))   //true



//// indexOf() method returns the position of the first occurrence of a specified value in a string.
////indexOf() returns -1 if the value is not found.
 const description="provility software solutions private limited software"

 console.log(description.indexOf("software")); //10







 





