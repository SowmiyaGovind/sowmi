console.log('start execution');
doSomeOperationAsync(3,4,(output)=>{
    console.log(output)
},(output1)=>{
    console.log(output1)
});
console.log('end execution');
function doSomeOperationAsync(a,b,cb){
    console.log('operation running');
    setTimeout(() => {
        const sum = a + b;
        cb(sum);
        setTimeout(()=>{
            console.log('second operation');
            const newsum=sum+10;
            cb(newsum);
        },5000)
    },3000)
    
}


// //using four argument
// console.log('start execution');
// doSomeOperationAsync(3,4,(output)=>{
//     console.log(output)
// },10);
// console.log('end execution');
// function doSomeOperationAsync(a,b,cb,d){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//         cb(sum);
//         const newsum=sum+d;
//         cb(newsum);
//     },3000)
// }


