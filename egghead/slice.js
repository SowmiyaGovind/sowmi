var person={
    names:'sowmi-abi'
};
var filter={
    'deslugify':x => x.replace('-',' '),
    'upperCase':x => x.toUpperCase()
};
var input='names | deslugify | uppercase';
console.log(input);
var sections=input.split('|').map(x=>x.trim());
 console.log(sections)
var ref=person[sections[0]];
var result=sections
  .slice(1)
  .reduce((prev,next)=>{
      if(filter[next]){
    return filter[next].call(null,prev);
      }
      return prev;
},ref);
  console.log(result);