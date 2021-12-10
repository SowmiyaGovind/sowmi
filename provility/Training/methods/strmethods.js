//ex:1

// const capitalize = (str) => {
    // let capitalized = "";
    // const words = str.split(" ");
    // for(let word of words){
        // const finalWord = word[0].toUpperCase() +  word.substring(1)
        // capitalized = capitalized+" "+finalWord
    // }
    // return capitalized;
//   }
//   const str1 = 'js string exercises'
//   console.log(capitalize(str1)) // jS strinG exerciseS
// 

//ex:2

const chop = (str,chunk) => {
    let choppedElements = [];
    for(let i=0;i<str.length;i+=chunk){
        let str1=str.substr(i,chunk);
      choppedElements.push(str1)
    }
  
    return choppedElements
  }
  const str = 'javascript'
  const chunk = 2
  console.log(chop(str,chunk))// ['ja','va','sc','ri','pt']












