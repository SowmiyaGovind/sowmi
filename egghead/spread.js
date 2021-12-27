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


console.log("..")


let name="sowmiya";
name=10;
function add(num1,num2){
    return num1+num2
}
console.log(add(2,"3"))

