// const { intersectionWith } = require("lodash");
//normally we write code in if
// const nums=[1,6,8,2,4];
// if(nums[0]===2){
    // console.log(0);
    // console.log("array has two")
// }
// if(nums[1]===2){
    // console.log(1);
    // console.log("array has two")
// }
// if(nums[2]===2){
    // console.log(2);
    // console.log("array has two")
// }
// if(nums[3]===2){
    // console.log();
    // console.log("array has two")
// }
// if(nums[4]===2){
    // console.log(4);
    // console.log("array has two")
// }

//code repeat so we declare function

// function isTwo(nums){
    // if (num===2){
        // console.log("array has two");
    // }
// }
// isTwo(nums[0]);
// isTwo(nums[1]);
// isTwo(nums[2]);
// isTwo(nums[3]);
// isTwo(nums[4]);


//excecution is repeated so we are using lopps
//two types of loop while and for loop
//while used to false a condition otherwise its not a end
//for loop is when a condition is false its end

const  nums =[1,6,2,8,4,10,14,12]
let i=0;

while(i<8)
{
    isTwo(nums[i])
    i++
}
function isTwo(num){
    if(num===2){
        console.log(`array is in this index:`)
    }
    else {
        console.log("array is not in element ")
    }
}


//condition check 2 is there and which index

// while(i<8)
// {
    // isTwo(nums[i],i) ///nums[i] check value of index //i is index of array
    // i++
// }
// function isTwo(num,index){  // index argument passing
    // if(num===2){
        // console.log(`array is in this index:${index}`)   //using template litrals to get index
    // }
    // else {
        // console.log("array is not in element ")
    // }
// }