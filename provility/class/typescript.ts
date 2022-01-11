console.log("happy")

// let c1=new Car();

class Car{
    color:string="white";
    setEngine(engine:Engine){
        this.engine=engine;

    }
    getEngine(){
        return this.engine;
    }
   

}
class Engine{
    capacity:number;
    start(){
        console.log("engine")
    }
}

let cl=new Car();
let e1=new Engine();
c1.setEngine(e1);
cl.start()
console.log(cl)
