


function one(){
    console.log('started one');
    const p1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(1);
        },3000);
    });
    return p1;
}

function two(num1){
    console.log('started two');
    const p1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(2 + num1);
        },1000)
    });
    return p1;
}

function three(){
    console.log('started three');
    const p1 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(3);
        },2000)
    });
    return p1;
   
}

function four(){
    return new Promise((resolve,reject)=>{
        resolve(4);
    })
}

const p1 = one()

// sin in promise
/* p1.then((a) => {
    console.log(a);
    two(a).then((b) => {
        console.log(b);
    })
})
 */

// correct way
// promise chaining

one()
  .then((a) => {
    console.log(a);
    return a;
  })
  .then((a) => {
      return two(a);
  })
  .then((b) => {
    console.log(b);
  })
  
