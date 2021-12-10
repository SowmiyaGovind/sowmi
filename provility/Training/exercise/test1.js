console.log('star execution');
doSome(3,4,(output)=>{
    console.log('return',output);
//     return output;
//console.log('result',output+3);
 },(addition)=>{
     console.log('return value',addition);
 });
console.log('end execution');
function doSome(a,b,cd,e){
    console.log('operation running')
    setTimeout(()=>
    {
        const sum=a+b;
            cd(sum)
            const add=(output+3);
            e(add)
    },3000)
    
}
console.log('result',ouput+e)

// function rel(){
// return doSome;
// }
// setTimeout(()=>
// {
// return rel;
// console.log(rel)
// },4000)
// }






