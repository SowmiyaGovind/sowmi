function tag(string,...values){
    if (values[0]>2){
        values[1]="awake";
    }
    return `${string[0]}${values[0]}${string[1]}${values[1]}`
}
 var message= tag`It is ${new Date().getHours()} I'm ${""}`;
 console.log(message);
console.log(Date());



oct 
8,11,13,15,
nov 
23,24,26,29,30,
dec 
1