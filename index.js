const batteryBatches = [6, 9, 7, 8, 1];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); 

