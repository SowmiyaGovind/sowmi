const employeesArray = [
  [1, 5, [2, 3]],
  [2, 3, []],
  [3, 3, []],
];
const id = 1;
function GetImportance(employeesArray, id) {
  const employees = createEmployeesMap(employeesArray);
  let sumImportance = 0;
  let employee = employees[id];
  if (employee) {
    sumImportance += employee.importance;
    // if (employee.subordinate.length > 0) {
      employee.subordinate.forEach((x) => {
        // [2,3] , // x=2
        const subEmployee = employees[x]; //  {}
        sumImportance += subEmployee.importance;
      });
    }
  
  return sumImportance;
}
function createEmployeesMap(employeeData) {
  let obj = {};
  for (let i = 0; i < employeeData.length; i++) {
    let key = employeeData[i][0];
    let value = employeeData[i];
    obj[key] = {
      id: value[0],
      importance: value[1],
      subordinate: value[2],
    };
  }
  return obj;
}
console.log(GetImportance(employeesArray, id));
