const currentStatus: string = "Submitted";
const nextStatus: string = "Resolved";

if (currentStatus === "Submitted" && nextStatus === "In Review") {
    console.log("Transition allowed");
} else if (currentStatus === "In Review" && nextStatus === "Resolved") {
    console.log("Transition allowed");
} else if (currentStatus === "In Review" && nextStatus === "Waiting for Info") {
    console.log("Transition allowed");
} else if (currentStatus === "Waiting for Info" && nextStatus === "In Review") {
    console.log("Transition allowed");
} else {
    console.log("Transition not allowed");
}