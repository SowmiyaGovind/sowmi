// const operations=["--x","x++","x++"]

// var finalValueAfterOperations = function(data) {
//     let x=0;
//     for(let i of data){
   
//         x=x+data[i]
//     //    i++
//     }
//     return x

   
// };
// console.log(finalValueAfterOperations(operations))

  const account=[[1,2,3],[1,2,5]]
function add(data){
    for(let i=0;i<data.length;i++){
        let sum=sum+data[i]
        for(let j=0;j<data.length;j++){
            let sum1=sum1+data[j]
            max=Math.max(sum,sum1)
        }

    }
return max
}
    console.log(add(account))