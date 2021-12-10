// function toUpper(string) {
//     return string.toUpperCase();
//   }
  
//   const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
//   const upperCats = cats.map(toUpper);
  
//   console.log(upperCats);
//   console.log(cats)

function mymap(array,cb){
    let mapped = [];
    for(let e of array){
      let transformed = cb(e);
      mapped.push(transformed);
    }
  
    return mapped;
  }
  
  
  const doubles = mymap([1,2,3,4],(e) => {
    return e * 2
  })
  
  console.log(doubles)// [2,4,6,8]
