// const employees = [
//   { name: "gopi", exe: 5, salary: "20000" },
//   { name: "umar", exe: 5, salary: "10000" },
//   { name: "mani", exe: 5, salary: "15000" },
// ];
// 
// 

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
        type: 'sedan'
    },
    {
        make: '2010',
        model: 'maruti',
        type: 'hatchback'
    },
    {
        make: '1999',
        model: 'ford',
        type: 'hatchback'
    },   
]
/* 
    REQUIREMENT for this program
    
    1. findIndex of employee john
    2. findIndex of employeed with age 25
    3. findIndex of sedan type car
    4. findIndex of ford car
*/
function findIndex(data,fn){
    for(let i=0;i< data.length;i++){
        let condition = fn(data[i]);
        if(condition){
        return i
            //  console.log(i)
        }
     }
     return -1;
}
function sedanCheck(c){
    return c.type === "sedan"
}
console.log(
    findIndex(cars,sedanCheck)
)
// const indx = findIndex(employees,function(e) {
    // return e.name = "john" || e.salary == 10
// })
// console.log(indx);


