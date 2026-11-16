//Print passedText + failedText and explain in a comment why the result is 173.
const passedText = '17';
const failedText = '3';

// Both variables are strings, so + performs concatenation instead of numerical addition.
console.log(passedText + failedText);

//2.Convert both with Number() and print the total (20).
const passed = Number(passedText); //17
const failed = Number(failedText); //3

console.log(passed + failed);

//3. Print typeof of the text and of the converted value.
console.log(`${typeof passedText} and ${typeof passed}`);
console.log(`${typeof failedText} and ${typeof failed}`);