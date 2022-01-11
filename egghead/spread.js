/* // const first=[1,2,3];
// const second=[1,2,3]
// function count(a,b,c){
//     return a+b+c
// }
// console.log(count(...first))
// console.log(count(second))


const people=[
    {
        "name":"sowmiya",
        "age":"10"
    },{
        "name":"sow",
        "age":"16"
    }
]
// function predicate(obj){
//     return obj.name=="sow"
// }
// console.log(predicate(people[0]))
// console.log("sow")
const peteObj=people.find((p)=>{
    return p.name=="sow"
})
// console.log(peteObj)
// function petePredicate(p){
//     return p.nam=="sow"
// }

Array.prototype.myFind=function(fn){

for(let el of this){
    // console.log(this)
     if( fn(el)){
         return el
     }
}
}

const peteObjWithMyFind=people.myFind((p)=>{
    return p.name=="sow"
    // console.log(p)
})
console.log(peteObjWithMyFind)



const p={

}
var filter={
    'deslugify':x => x.replace('-',' '),
    'upperCase':x => x.toUpperCase()
};
console.log(filter["deslugify"])
const r=filter['deslugify']("a-c")
console.log(r)
const pi=["upperCase","deslugify"]
const t=filter[pi[0]]("h")
console.log(t) */
// console.log("abc")
// const c={
//     a:1,
//     draw:function(){
//         console.log('abi')
//     }
// }
// const c2={
//     a:1,
//     location:{
//         x:10,
//         y:20
//     },
//     draw(){
//         console.log('abi')
//     }
// }


// factoring
// function createCircle()

//using construcor - its a function
//use capital letter in first 
// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('drawing');
//     }

// }
// const circle1=new Circle(1)


// console.log("..")


// let name="sowmiya";
// name=10;
// function add(num1,num2){
//     return num1+num2
// }
// console.log(add(2,"3"))


// console.log('start execution');
// doSomeOperationAsync(3,4,(output)=>{
//     console.log(output)
// },(output1)=>{
//     console.log(output1)
// });
// console.log('end execution');
// function doSomeOperationAsync(a,b,cb){
//     console.log('operation running');
//     setTimeout(() => {
//         const sum = a + b;
//         cb(sum);
//         setTimeout(()=>{
//             console.log('second operation');
//             const newsum=sum+10;
//             cb(newsum);
//         },5000)
//     },3000)
    
// }


// function readFile(a,b){
//     return a+b

// }
// console.log("first statement")
// const fileData1=readFile(4,5)
//const fileData1=readFile(4,5)
// console.log(fileData)
// console.log('last statement')
const people = [
    {
      "name": "Ahmed",
      "age": "27",
      "reportsTo": "Kumar"
    },
    {
      "name": "Ahmed",
      "age": "30",
      "reportsTo": "none"
    },
    {
      "name": "Pete",
      "age": "20",
      "reportsTo": "Ahmed"
    },
    {
      "name": "Kabeer",
      "age": "37",
      "reportsTo": "Ahmed"
    },
    {
      "name": "John",
      "age": "40",
      "reportsTo": "Kumar"
    },
    {
      "name": "Karthik",
      "age": "20",
      "reportsTo": "Kabeer"
    },
    {
      "name": "Saleem",
      "age": "30",
      "reportsTo": "Kabeer"
    }
  ]

console.log('first statement');
readFileAsync(4,5,(r1)=>{
    readFileAsync(r1,5,(r2)=>{
        readFileAsync(r2,4,(r3)=>{

            console.log(r3)
        })
       
    })
  
});
console.log('last statement')

function readFileAsync(a,b,cb){
    setTimeout(()=>{
       cb(a+b)
    },3000)

}



