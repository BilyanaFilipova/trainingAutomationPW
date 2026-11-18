const requests = [
    { id: "REQ-1001", title: "Broken street light", priority: 2, status: "Submitted" },
    { id: "REQ-1002", title: "Water leakage", priority: 1, status: "In Review" },
    { id: "REQ-1003", title: "Road maintenance", priority: 3, status: "Resolved" },
    { id: "REQ-1004", title: "Garbage collection", priority: 4, status: "Waiting for Info" },
    { id: "REQ-1005", title: "Damaged sidewalk", priority: 5, status: "Submitted" }
];

console.log(
    "ID".padEnd(12) +
    "Title".padEnd(25) +
    "Priority".padEnd(12) +
    "Status"
);

console.log("-".repeat(65));

for (const request of requests) {
    console.log(
        request.id.padEnd(12) +
        request.title.padEnd(25) +
        String(request.priority).padEnd(12) +
        request.status
    );
}


