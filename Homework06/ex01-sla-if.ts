//Write a function-free script that takes a priority (1–5) and prints the SLA in hours using if / else if
let priority: 1 | 2 | 3 | 4 | 5 ;

priority = 1;

if (priority === 1) {
    console.log("SLA: 2 hours");
} else if (priority === 2) {
    console.log("SLA: 4 hours");
} else if (priority === 3) {
    console.log("SLA: 8 hours");
} else if (priority === 4) {
    console.log("SLA: 24 hours");
} else if (priority === 5) {
    console.log("SLA: 48 hours");
}