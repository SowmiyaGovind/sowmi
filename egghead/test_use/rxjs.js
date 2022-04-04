// let a=10;
// let b=20;
// const c=a+b;
// console.log(c);
// a=20;
// console.log(c)



let obs={
   next: function (a){
        console.log(a)
    }

}

function subscribe(observer){
observer.next(30)
}
subscribe(obs)