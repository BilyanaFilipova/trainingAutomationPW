const requestStatuses = [
    "Submitted",
    "Resolved",
    "In Review",
    "Submitted",
    "Submitted",
    "Resolved",
    "In Review"
];

let submittedCount = 0;
let inReviewCount = 0;
let resolvedCount = 0;

// Loop through the array
for (const status of requestStatuses) {

    if (status === "Submitted") {
        submittedCount++;
    } else if (status === "In Review") {
        inReviewCount++;
    } else if (status === "Resolved") {
        resolvedCount++;
    }
}

// Print the results
console.log(`Submitted: ${submittedCount}`);
console.log(`In Review: ${inReviewCount}`);
console.log(`Resolved: ${resolvedCount}`);