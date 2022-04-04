console.clear();
function decorator(constructor:Function) {
    
    console.log('decorator functioncalled');
}
@decorator
class Sample {
    id:number=0
}