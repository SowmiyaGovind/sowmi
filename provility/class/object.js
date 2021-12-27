let person={
    name:"faiyaz",
    house:'house',
    location:['a','b','c'],
    showName(){
        console.log(this.name);

    },
}
person.showName()
let p2={
    name:"p2",
    house:'house',
    location:['a,b,c'],
    showName:function(){
        console.log(this.name);

    }
}
p2.showName.call({
    age:'sowmiya'
});
