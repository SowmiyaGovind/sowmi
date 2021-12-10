
// loop :



/*
    The idea of these code snippets is to reinforce the explained 
    concepts in the session
    each log statement should be asked to trainees one at a time
*/
const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
//1.
 for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);       
 
}                //   1,12,3,6,2,8,4,5,9,11,7,10
console.log("*******")

// 2.
for (let j = nums.length - 1; j > 0; j--) {
  console.log(nums[j]);
}  //    10,7,11,9,5,4,8,2,6,3,12
// 
// 
3.
// for (let j = nums.length - 1; j >= 0; j--) {
//   console.log(nums[j]);
// } // 10,7,11,9,5,4,8,2,6,3,12,1
// 
// 
4.
// for (let k = 0; k < nums.length; k += 2) {
//   console.log(nums[k]);
// }   //    1,3 2,4,9,7
// 
5.
// let i = 0;
// while (i < nums.length) {
//   console.log(nums[i]);
//   i++;
// }   //  1,12,3,6,2,8,4,5,9,11,7,10
// 
6.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
//   i++;
// }   //  12,6,8,5,11,10
// 
7.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
// }   // 12,3,6,2,8,4,5,9,11,7,10
// 
// 
8.
// let i = nums.length;
// while (i >= 0) {
//   console.log(nums[i]);
//   i--;
// }  //    10,7,11,9,5,4,8,2,6,3,12,1
// 
// 9. This will take some thinking
// for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
//   console.log(nums[i] + nums[j]);
// }  //       13,15,9,8,10,12,9,14,20,18,17
// 
// 10.Take time with this
// const nums = [1,2,3,4]; //12
// let temp;
// let a = 0; 
// let b = nums.length-1; //11
// while (a< b) {
  // temp = nums[a];
  // nums[a] = nums[b];
  // nums[b] = temp;
  // a++;
  // b--;
//   console.log(nums[a],nums[b]);

// }
// console.log(nums)


// 
   //  10,7,11,9,5,4,8,2,6,3,12,1
// 
// only end--// 12,3,6,2,8,4,5,9,11,7,10,1
//  only start++// 10,1,12,3,6,2,8,4,5,9,11,7
// 
// 


//   const numbers=[11,12,13,14,15] ;
//   let t=0;
//   let output=[];
//   for (let i=numbers.length-1;i>=0;i--){
//    const a=numbers[i];
//     output[t]=a;

//     t++
//   }
// console.log(output);

// const numbers=[11,12,13,14,15]
