// pop()
// const college=["ksr","srm","prc"];
// college.pop();
// console.log(college); // ['ksr','srm']
// let removed=college.pop()
// console.log(removed); // srm

//shift()
// const value=["1","2","3","4"];
// const v=value.shift()
// console.log(v) //1
// console.log(value) //['2','3','4']

//push()
// const name=["abi","indhu","hemu"];
// const b=name.push("charu");
// console.log(b) //4
// console.log(name) //['abi','indhu','hemu','charu']

//unshift()
// const names=["abi","indhu"];
// const c=names.unshift("hemani");
// console.log(c) //3 
// console.log(names) // ['hemani','abi','indhu']

//splice()
// var array=["one","two","three","four","five"];
// console.log(array.splice(2,1,"3"));   
// console.log(array)       
 //['threee'] 
//['one','two','3','four','five']

//slice()
// var arr = [23,56,87,32,75,13];
// var new_arr = arr.slice(1,5);
// console.log(arr);
// console.log(new_arr);
// console.log(arr) 
//[23,56,87,32,75,13]
//[56,87,32,75]
//[23,56,87,32,75,13]

//join()
// const fruits=["apple","banana","orange"];
// const fruitsadd=fruits.join(" and ")
// console.log(fruitsadd)    
//apple and banana and orange

//includes()
// let str = "Hello world, welcome to the universe.";
// console.log(str.includes("world"))  
//true

//indexOf()
// const description="provility software solutions private limited software"
// onsole.log(description.indexOf("software")); 
// 10

// let str="singapore london america canada";
// const newStr=str.split(" ");     // const newStr=str.split("")
// console.log(newStr)


// const reverse = (array)
// 
    // array=[]
    // for(i=data.length-1;i>=0;i--){
    // array.push(data[i]);
// }
//  return array
// 
// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]
// 
// const camelize = (str) => {
    // let res="";
    // for (let i = 0; i < str.length; i++)
    // {
        // if (str[i] == " ")
        // {
            // res= res + str[i+1].toUpperCase();
        // }
        // else{
            // res= res + str[i];
            // }}
    // return res;
// }
// const str = "JavaScript exercises"
// console.log(camelize(str)) // "JavaScriptExercises"
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
function findIndexWithArguments(data,key,value){
    for(let i=0;i< data.length;i++){
        if(data[i][key] === value){
            return i
        }
     }
     return -1;
}
function findIndex(data,fn){
    for(let i=0;i< data.length;i++){
        let condition = fn(data[i]);
        if(condition){
            return i
        }
     }
     return -1;
}
function sedanCheck(c){
    return c.type == "sedan"
}
console.log(
    findIndex(cars,sedanCheck)
)
const indx = findIndex(employees,function(e) {
    return e.name = "john" || e.salary == 10
})
console.log(indx);