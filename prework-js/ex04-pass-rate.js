//With total = 40, failed = 6, skipped = 2: calculate passed tests and the pass rate in percent, rounded with Math.round.
const total = 40;
const failed = 6;
const skipped = 2;

const passedTests = total - failed - skipped;
const passRate = Math.round((passedTests/total)*100);

console.log(`The passed tests are ${passedTests}.`);
console.log(`The precent of the passed tests is ${passRate}%.`);

//Then print whether the run is green: green means no failed tests and a pass rate of at least 90.
const greenRun = failed === 0 && passRate >= 90

console.log(`whether the run is green: ${greenRun}`);