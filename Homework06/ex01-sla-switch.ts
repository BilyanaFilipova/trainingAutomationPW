let priority: 1 | 2 | 3 | 4 | 5 = 4;

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