
//turn 30 hours into full days + hours (Math.floor, %) and into minutes;
const days = 30;
const turnIntoDays = Math.floor(days/24);
const turnInHours = (days%24);
const turnIntoMinutes = (days*60);

console.log (`${turnIntoDays}, ${turnInHours}, ${turnIntoMinutes}`);


//update a let counter: 5 open, 3 new, 2 resolved
let counter = 0;

counter += 5; // open
counter += 3; // new
counter -= 2; // resolved

console.log(`Open requests: ${counter}`);

