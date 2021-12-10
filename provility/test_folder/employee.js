const employeesArray = [
    [1, 5, [2, 3]],
    [2, 3, []],
    [3, 3, []],
  ];
  const id = 5;
 
      
  /* }
  console.log(createEmployeesMap(employeesArray));
  let output = {
    1: {
      id: 1,
      importance: 5,
      subordinates: [2,3]
    },
    2: {
      id: 2,
      importance: 3,
      subordinates: 3
    }
  }
  /* */
  function GetImportance(employeesArray,id){

    const employees = createEmployeesMap(employeesArray);
    // const employee = employees.find(e => e.id === id);
   for(let key in employees){
    if(employees[key]==id){
        let employee=employees[key]
    }
   }
        //  Object.keys(object).find(key => object[key] === value);
    
    let importanceSum = employee.importance;  
    
    if(employee.subordinates.length) {
        const subs = employees.filter(s => {
            return employee.subordinates.find(es => es === s.id);
        })
   
        subs.forEach(s => {
            importanceSum += GetImportance(employees, s.id);
        })
    }
    
    return importanceSum;
};
  function createEmployeesMap(employeeData) {
    let obj = {}
    for (let i = 0; i < employeeData.length; i ++) {
        let key = employeeData[i][0];
        let value = employeeData[i];
        obj[key] = {
            id:value[0],
            importance:value[1],
            subordinate:value[2]
        };
      }
      
      return obj
  }
  
 
 console.log(GetImportance(employeesArray,id))




  