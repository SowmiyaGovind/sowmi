function slowTask() {
  console.log("Slow task");
}

function fastTask() {
  console.log("Fast task");
}

function asyncSlowTask() {
  setTimeout(slowTask, 2000);
}

function init() {
  fastTask();
  asyncSlowTask();
  fastTask();
  fastTask();
}


init()




/// code two




function one(){
  console.log('started one');
  setTimeout(() => {
      console.log("one");
  },3000)
}

function two(){
  console.log('started two');
  setTimeout(() => {
      console.log("two");
  },1000)
}

function three(){
  console.log('started three');
  setTimeout(() => {
      console.log("three");
  },2000)
}

one();
three();
two();


// step 3




function one(cb){
  console.log('started one');
  setTimeout(() => {
      cb(1);
  },3000)
}

function two(cb){
  console.log('started two');
  setTimeout(() => {
      cb(2);
  },1000)
}

function three(cb){
  console.log('started three');
  setTimeout(() => {
      cb(3);
  },2000)
}

one(function(a){
  console.log(a);
});
two(function(b){
  console.log(b);
});
three(function(c){
  console.log(c);
});



// using promise




function one(){
  console.log('started one');
  const p1 = new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve(1);
      },3000);
  });
  return p1;
}

function two(){
  console.log('started two');
  const p1 = new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve(2);
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

one().then((a) => {
  console.log(a);
})
two().then((b) => {
  console.log(b);
});
three().then((c) => {
  console.log(c);
});

four().then((d) =>{
  console.log(d)
})