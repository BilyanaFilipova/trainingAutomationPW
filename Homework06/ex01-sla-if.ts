//Write a function-free script that takes a priority (1–5) and prints the SLA in hours using if / else if
let priority: 1 | 2 | 3 | 4 | 5 = 4;

if (priority >= 4) {
  console.log("SLA is 4 days");
} else if (priority >= 2) {
  console.log("SLA is 7 days");
} else {
  console.log("SLA is when the time comes - if it ever comes.");
}


switch (Number(priority)) {
  case 1:
    console.log("SLA is when the time comes - if it ever comes.");
    break;
  case 2:
  case 3:
    console.log("SLA is 7 days");
    break;
  case 4:
  case 5:
    console.log("SLA is 4 days");
    break;
  default:
    console.log("unknown value");
}
