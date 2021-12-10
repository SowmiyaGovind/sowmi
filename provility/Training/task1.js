let data=[-5,1,5,0,-7]
let maxlength=0
let altitude=0
function checkAltitude(gain) {
   
    for(let i=0;i<gain.length;i++){
        altitude=gain[i]
        maxlength=math.max(maxlength,altitude)
    }
    return 
};
console.log(checkAltitude(altitude))