console.log('start execution');
const returnedValue = doSomeOperation(3,4);
console.log(returnedValue);
const returnedValue2 = doSomeOperation(returnedValue,10);
console.log(returnedValue2);
console.log('end execution');
function doSomeOperation(a,b){
    console.log('operation running');
    sleep(3000);
    return a + b;
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }




  