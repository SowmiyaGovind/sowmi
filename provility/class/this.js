// //implicit binding

// let person={
//     name:'sowmi',
//     age:20,
//     showName:function(){
//         console.log(this)
//         console.log(this.age)
//     },
//     address:{
//         street:'chennai',
//         showStreet:function(){
//             console.log(this.street);
//         }
//     }
// }
// person.showName()
// person.address.showStreet()


// //explicit binding
// //call,apply,bind to use this value we give to this 
// let sowmiya={
//     name:'sowmi',
//     age:12,
//     showName:function(){
//         console.log(this.name)
//     }
// }
//     let faiyaz={
//         name:'faiyaz',
//     }

// sowmiya.showName()
// sowmiya.showName.call(faiyaz)




const b=10;
const arr=[1,'hello','great']

const one=function(a){
    console.log("one")
    return a
}
function two(b){
    console.log("two")
    return b
}

function three(c){
    console.log("three")
    return c
}

//referencing a function

const fns=[];
 fns.push(one);
 fns.push(two);
 fns.push(three);
// console.log(fns[0])
// fns[0]()
fns.forEach((a)=>{
   console.log(a(3))
})



// 15th

const shape={
    radius:10,
    diameter(){
        return this.radius*2;
    },
    perimeter:()=>2*Math.PI*this.radius,
};
console.log(shape.diameter())
console.log(shape.perimeter())


const bird={
    size:'small',

};
const mouse={
    name:'Minckey',
    small:true,
}

let c={greeting:'hey'};
let d;
d=c;
c.greeting='hello';
console.log(d.greeting)


function person(f,l){
    this.f=f;
    this.l=l;
}
const lydia=new person('lydia','hallie');
const sarah =person('Sarah','d');
console.log(lydia);
console.log(sarah)



function checkAge(data){
    if(data==={age:18}){
        console.log('a')

    }
}

const foo=()=>console.log('f');
const bar=()=>setTimeout(()=> console.log('s'));
const baz=()=>console.log('t');
bar();
foo();
baz()