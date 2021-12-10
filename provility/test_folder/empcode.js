const employees = [
  [1, 5, [2, 3]],
  [2, 3, []],
  [3, 3, []],
];
const id = 1;
var GetImportance = function(employees, id) {
    let map = {};
    for(let i = 0; i < employees.length; i++) map[employees[i].id] = employees[i];
    let sum = em => map[em].subordinates.reduce((s, sub) => s += sum(sub), map[em].importance);
    return sum(id);
};
console.log(GetImportance(employees,id))


