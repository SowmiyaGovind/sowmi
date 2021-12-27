const paths = [ ["London", "New York"],["New York", "Lima"],["Lima", "Sao Paulo"],];
const paths1 = [["B","C"],["D","B"],["C","A"]]
const paths2 = [["A","Z"]]
const destCity = function (paths) {
  let distpoints = [],
    startpoints = [];
  paths.forEach((path) => {
    distpoints.push(path[1]);
    startpoints.push(path[0]);
  });
  for (let i = 0; i < distpoints.length; i++) {
    let dist = distpoints[i];
    if (!startpoints.includes(dist)) {
      return dist;
    }
  }
};
console.log(destCity(paths));//sao paulo
console.log(destCity(paths1));//A
console.log(destCity(paths2));//Z

