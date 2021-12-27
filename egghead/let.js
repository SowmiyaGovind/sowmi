// function constFunc(){
//     const p=0;
//     const c=1;
//     var i;
//     const temp;
//     for(i=0;i<name;i+=1){
//         temp=p;
//         p=c;
//         c=temp+c;
//     }
// }

function letFunc(){
   let p=0;
   let c=1;
   let n=10
    // const i;
    // const temp;
    for(let i=0;i<n;i+=1){
        let temp=p;
        p=c;
        c=temp+c;
    }
}
// console.log(constFunc)
console.log(letFunc)