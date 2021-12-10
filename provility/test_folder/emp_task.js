const employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]]   // 5 + 3 + 3 = 11.
const id = 1
function getImportance(arr,id){
let emp=1
for (let i = 0; i < arr.length; i++) {
    employelist=arr[i]
     console.log(employelist)
     employeid=employelist[0]
     console.log(employeid)
     employeimportance= employelist[1]
     console.log(employeimportance)
    employesubordinate= employelist[2]
    console.log( employesubordinate)
    
    if(id==employeid){
       
    // return emplo
     
        let total=employesubordinate
        for(let j=0;j<employesubordinate.length;j++){
            total += employeimportance
           console.log(total)
           }
    }
//    if(id==)
   
//   countsubordinate=employeimportance+employel
}
return emp
}
console.log(getImportance(employees))