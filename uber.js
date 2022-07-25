const uberRide=85;
const driverCommission = 0.7;

const uberDriverEarning = uberRide * uberDriverCommission;
const uberEarning =uberRide - uberDriverEarning;

console.log("Earning:", uberEarning, uberDriverEarning);