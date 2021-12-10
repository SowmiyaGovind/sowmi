const employees = [
    {
        name: 'john',
        age: 20,
        salary: 10
    },
    {
        name: 'george',
        age: 25,
        salary: 20
    },
    {
        name: 'kumar',
        age: 30,
        salary: 35
    },
]
const cars = [
    {
        make: '2000',
        model: 'ford',
        type: 'hatchback'
    },
    {
        make: '2010',
        model: 'maruti',
        type: 'hatchback'
    },
    {
        make: '1999',
        model: 'ford',
        type: 'sedan'
    },
    
]
/* 
    REQUIREMENT for this program
    
    1. findIndex of employee john
    2. findIndex of employeed with age 25
    3. findIndex of sedan type car
    4. findIndex of ford car
*/
function findIndex1(data){
    for(let i=0;i< data.length;i++){
       if(data[i].name === "john"){
           return i
       }
    }
}
function findIndex2(data){
    for(let i=0;i< data.length;i++){
       if(data[i].age === 25){
           return i
       }
    }
}
function findIndex3(data){
    for(let i=0;i< data.length;i++){
       if(data[i].type === 'sedan'){
           return i
       }
    }
}
function findIndex4(data){
    for(let i=0;i< data.length;i++){
       if(data[i].model === 'ford'){
           return i
       }
    }
}
console.log(findIndex1(employees));
console.log(findIndex2(employees));
console.log(findIndex3(cars));
console.log(findIndex4(cars));