const results = [
  { name: "Login", status: "passed", durationMs: 1800 },
  { name: "Search", status: "failed", durationMs: 4200 },
  { name: "Profile", status: "skipped", durationMs: 0 },
  { name: "Checkout", status: "passed", durationMs: 3500 },
  { name: "Logout", status: "passed", durationMs: 600 },
];

// Count test results
function summarise(results) {
  const summary = {
    passed: 0,
    failed: 0,
    skipped: 0,
  };

  for (const result of results) {
    summary[result.status]++;
  }

  return summary;
}

// Find the slowest test
function slowestTest(results) {
  let slowest = results[0];

  for (const result of results) {
    if (result.durationMs > slowest.durationMs) {
      slowest = result;
    }
  }

  return slowest.name;
}

// Print both
console.log(summarise(results));
console.log("Slowest:", slowestTest(results));