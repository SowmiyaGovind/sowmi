const prompt = require("prompt-sync")();

                                                   // name,gender,location
// const student1= prompt('what is your name:')
// console.log(student1)
// const student1= prompt('what is your location:')
// console.log(student1)
// const student1= prompt('female or male:')
// console.log(student1)

// const student2=prompt('what is your name:')
// console.log(student2)
// const student2=prompt('what is your location:')
// console.log(student2)
// const student2=prompt('female or male:')
// console.log(student2)

// const student3=prompt('whats your name:')
// console.log(student3)
// const student3=prompt('whats your location:')
// console.log(student3)
// const student3=prompt('female or male:')
// console.log(student3)


                                                             // using function to organized code 


// function college(){
    // const name=prompt('whats your name:')
   
    // const location =prompt('whats your location:')
   
    // const gender=prompt('female or male:')
  
  
 
// 
// }
//  const student1=college()
//  console.log(student1)
//  const student2=college()
//  console.log(student2)
//  const student3=college()
//  console.log(student3)


                                                         //object using in fuction


// function college() {
    // const participant ={};
        // const name=prompt('whats your name:');
    //    participant.name=name;
        // const location =prompt('whats your location:');
    // participant.location=location;
        // const gender=prompt('male or female:');
    // participant.gender=gender;
// 
// 
    // return participant;
// }
// 
// const student1=college();
// console.table(student1);
// const student2=college();
// console.table(student2)
// const student3=college();
// console.table(student2)


                                                           //parsing information in nested function 

function introduceYourSelf (){
    const participant ={};

    const name= prompt('what is your name?:')
    setInObject(participant,"name",name)    //(object,key,value)

    const location =prompt('whats your location:');
setInObject(participant,"location",location)

    const gender=prompt('male or female:');
    setInObject(participant,"gender",gender)

    const age=prompt('what is your age:');
    setInObject(participant,"age",age)
   return participant;
}
function setInObject(object,key,value){
object[key]=value;
return object
}

const p1=introduceYourSelf();
// console.table(p1);
const p2=introduceYourSelf();
// console.table(p2);
const p3=introduceYourSelf()
// console.table(p3)


const p=[p1,p2,p3]
console.table(p);
 
 
