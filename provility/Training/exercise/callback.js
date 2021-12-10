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
// function findIndexWithArguments(data,key,value){
    // for(let i=0;i< data.length;i++){
        // if(data[i][key] === value){
            // return i
        // }
    //  }
    //  return -1;
// }
function findIndex(data,fn,cartype){

    for(let i=0;i< data.length;i++){
        let condition = fn(data[i] ,cartype);
        if(condition){
              console.log (i)
            //   return i
        }
     }
     //return -1;
}
function sedanCheck(c,cartype){
    return c.type == cartype 
}
console.log(
    findIndex(cars,sedanCheck,'A')
)
findIndex(cars,sedanCheck,'s')


// function carcheck(cc){
    // return cc.type=="a"
// }
// console.log(findIndex(cars,carcheck))
// const indx = findIndex(employees,function(e) {
    // return e.name == "john" || e.salary == 10
// })
// 

// const car = findIndex(cars, function(car){
// return car.type === 'hatchback' || car.type === 'sedan'
// })
//console.log(indx);
// console.log(car)



