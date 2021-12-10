// two gain values
const gain = [-5, 1, 5, 0, -7];
const gain1 = [-4, -3, -2, -1, 4, 3, 2];

function checkAltitude(data) {
  let max = 0;
  let altitude = 0;
  for (let i = 0; i < data.length; i++) {
    altitude = altitude + data[i];
    max = Math.max(max,altitude);
  }
  return max;
}
console.log(checkAltitude(gain));   //1
console.log(checkAltitude(gain1));   //0
