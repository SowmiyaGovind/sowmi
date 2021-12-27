// array concat
const numbers=[1,2,3,4,5]
let numbers1=numbers.concat(6,7,8,[9,10],[[11,12]],'abi')
console.log(numbers1)
let numbers2=numbers.concat([6,7,8,[9,10],[[11,12]],abi])
console.log(numbers2)


//concat 2 array of object
const people=[
{
name:"sowmiya"
},

{
    name:"indhu"
}
]
const people2=[
    {
        name:"abi"
    },
    {
        name:"vanathi"
    }
] 

people.concat(people2).forEach((person)=>{

    console.log(person.name)
})