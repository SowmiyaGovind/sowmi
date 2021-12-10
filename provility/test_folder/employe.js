const employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]]   // 5 + 3 + 3 = 11.
const id = 1
 function GetImportance(employees, id) {
//    for(let emp in employees){
//        employees=employees[emp];
//    }
var returnemp=employees.map((e)=> employees[e])


    //    console.log("employee:"+employees)
    //    importance[emp.id]=emp.importance;
    //    subordinate[emp.id]=emp.subordinate;
   

        
    //    return
   
//    let calculateimportance=empimportance+empsubordinate
// return calculateimportance

return returnemp
    }

console.log(GetImportance(employees,id))  
    
