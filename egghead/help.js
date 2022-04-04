const events={
    
}
function emit(eventName){
     events[eventName].forEach((fn)=>{
         fn()
     });
}
function on(name,fn){
   if(events[name]){
    events[name].push(fn)
   }else{
       events[name]=[];
       events[name].push(fn)
   }
}
on('new',function(){
    console.log('added called')
})
on('new',function(){
    console.log('added two called')
})
on('old',function(){
    console.log('added old called')
})


emit('new')
emit('old')