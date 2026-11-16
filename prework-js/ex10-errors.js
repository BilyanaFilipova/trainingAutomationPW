

//1.consol.log('hi');

// C:\GIT\trainingAutomationPW\prework-js\ex10-errors.js:1
//consol.log('hi');
//^

//ReferenceError: consol is not defined
    //at Object.<anonymous> (C:\GIT\trainingAutomationPW\prework-js\ex10-errors.js:1:1)
    //at Module._compile (node:internal/modules/cjs/loader:1968:14)
    //at Object..js (node:internal/modules/cjs/loader:2108:10)
    //at Module.load (node:internal/modules/cjs/loader:1690:32)
    //at Module._load (node:internal/modules/cjs/loader:1480:12)
    //at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    //at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    ////at node:internal/main/run_main_module:33:47

//Node.js v26.13.0


//Fix:
console.log('hi');


//2. const r = results[10]; console.log(r.status); (use the array from exercise 9)
// const r = results[10];
// console.log(r.status);

// Error: TypeError 
// results[10] is undefined, so undefined.status fails.
// Fix:
const r = results[0];
console.log(r.status);


// 3. 
// if (1 > 0 { console.log('yes'); }

// Error: SyntaxError 
// Missing closing parenthesis after condition.
// Fix:
if (1 > 0) {
  console.log("yes");
}


// 4. 
// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }

// No runtime error, but it prints 1, 2, 3, 4.
// Fix the condition:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}