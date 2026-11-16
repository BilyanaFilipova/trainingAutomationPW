// 1. isPassed(status)
function isPassed(status) {
  return status === "passed";
}

console.log(isPassed("passed"));     
console.log(isPassed("failed")); 


// 2. classifyDuration(ms)
// fast: < 1000, ok: 1000-3000, slow: > 3000
function classifyDuration(ms) {
  if (ms < 1000) {
    return "fast";
  } else if (ms <= 3000) {
    return "ok";
  } else {
    return "slow";
  }
}

console.log(classifyDuration(800));   // fast
console.log(classifyDuration(2700));  // ok
console.log(classifyDuration(4300));  // slow

// 3. formatResult(name, status = 'passed')
function formatResult(name, status = "passed") {
  return `${name}: ${status.toUpperCase()}`;
}

console.log(formatResult("Login"));             
console.log(formatResult("Login", "failed")); 


// 4. Rewrite isPassed as an arrow function
const isPassedArrow = (status) => status === "passed";

console.log(isPassedArrow("passed")); 
