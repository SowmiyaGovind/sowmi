const studentdata = [
  {
    name: "student1",
    age: 10,
  },
  {
    name: "student2",
    age: 30,
  },
  {
    name: "student3",
    age: 1,
  },
];
const result = studentdata.find( (n) =>{
  return n.name == "student2";
});
console.log(result);
// const findelement=studentDetails.find(function(c){
// return c.age>18;
// })
// console.log(findelement)
